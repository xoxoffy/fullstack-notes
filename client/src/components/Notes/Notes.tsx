import { Fragment } from 'react';
import './Notes.css';
import Note from './Note/Note';

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

  const mappedNotes = dummyNotes.map((note) => {
    return <Note id={note.id} title={note.title} body={note.body} />;
  });

  return (
    <Fragment>
      <h1>Moje notatki</h1>
      {mappedNotes}
    </Fragment>
  );
};

export default Notes;
