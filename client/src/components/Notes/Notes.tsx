import { Fragment, useState } from 'react';
import './Notes.css';
import Note from './Note/Note';
import NewNote from './NewNote/NewNote';
import Modal from 'react-modal';
import EditNote from './EditNote/EditNote';

const Notes: React.FunctionComponent = () => {
  const dummyNotes = [
    {
      id: '2323',
      title: 'Wykąpać psa',
      body: 'Pamiętaj by wykąpać psa',
    },
    {
      id: '4343',
      title: 'Wykąpać kota',
      body: 'Pamiętaj by wykąpać kota',
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [notes, setNotes] = useState(dummyNotes);
  const [noteToEdit, setNoteToEdit] = useState({});

  const deleteNote = (id: string) => {
    const filteredNotes = [...notes].filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const editNote = (editNote) => {
    const index = notes.findIndex((item) => item.id === editNote.id);
    console.log(index);

    if (index >= 0) {
      notes[index] = editNote;

      setNotes([...notes]);
    }
    toggleModal();
  };

  const editNoteHandler = (note: any) => {
    toggleModal();
    setNoteToEdit(note);
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const mappedNotes = notes.map((note) => {
    return (
      <Note
        key={note.id}
        id={note.id}
        title={note.title}
        body={note.body}
        onEdit={editNoteHandler}
        onDelete={deleteNote}
      />
    );
  });

  return (
    <Fragment>
      <h1>Moje notatki</h1>
      <Modal isOpen={modalIsOpen} contentLabel="Edytuj notatkę">
        <EditNote
          id={noteToEdit.id}
          title={noteToEdit.title}
          description={noteToEdit.body}
          onEdit={editNote}
        />
        <button onClick={toggleModal}>Anuluj</button>
      </Modal>
      <NewNote onAdd={addNote} />
      {mappedNotes}
    </Fragment>
  );
};

export default Notes;
