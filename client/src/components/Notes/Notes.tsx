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

  const deleteNote = (id: string) => {
    const filteredNotes = [...notes].filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const onEdit = (editNote) => {
    const index = notes.findIndex((item) => item.id === editNote.id);
    if (index >= 0) {
      notes[index] = editNote;
    }

    setNotes(...notes, editNote);
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
        onEdit={onEdit}
        onDelete={deleteNote}
      />
    );
  });

  return (
    <Fragment>
      <h1>Moje notatki</h1>
      <Modal isOpen={modalIsOpen} contentLabel="Edytuj notatkę">
        <EditNote onEdit={onEdit} />
      </Modal>
      <NewNote onAdd={addNote} />
      {mappedNotes}
    </Fragment>
  );
};

export default Notes;
