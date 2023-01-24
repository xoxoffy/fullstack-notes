import React, { Fragment, useState } from 'react';
interface Props {
  onEdit: (editNote: any) => void;
}
const EditNote: React.FunctionComponent<Props> = ({ onEdit }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const editNote = () => {
    // Edytowanie notatki
  };

  return (
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

      <button onClick={() => editNote()}>Zapisz</button>
      {/* <button onClick={() => setFormIsShown(false)}>Anuluj</button> */}
    </Fragment>
  );
};

export default EditNote;
