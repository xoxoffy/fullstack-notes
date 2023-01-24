import { Fragment, useState } from 'react';
import '../Notes.css';

interface Props {
  onAdd: (note: any) => void;
}

const NewNote: React.FunctionComponent<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [formIsShown, setFormIsShown] = useState<boolean>(false);
  const [emptyNoteFormErrorMessage, setEmptyNoteFromErrorMessage] =
    useState(false);

  const addNote = () => {
    if (!title || !description) {
      setEmptyNoteFromErrorMessage(true);
      return;
    }

    const note = {
      id: Math.random().toString(),
      title: title,
      body: description,
    };

    onAdd(note);

    setTitle('');
    setDescription('');
    setEmptyNoteFromErrorMessage(false);
  };

  return (
    <div className="note">
      {!formIsShown ? (
        <button onClick={() => setFormIsShown(true)}>Nowa notatka</button>
      ) : null}

      {formIsShown ? (
        <Fragment>
          <label>Tytuł:*</label>
          <input
            value={title}
            type="text"
            onChange={(event) => setTitle(event.target.value)}
          />

          <label>Opis:*</label>
          <input
            value={description}
            type="text"
            onChange={(event) => setDescription(event.target.value)}
          />

          <button onClick={addNote}>Dodaj notatkę</button>
          <button onClick={() => setFormIsShown(false)}>Anuluj</button>
        </Fragment>
      ) : null}
      {emptyNoteFormErrorMessage && formIsShown ? (
        <h4>Obydwa pola są obowiązkowe!</h4>
      ) : null}
    </div>
  );
};

export default NewNote;
