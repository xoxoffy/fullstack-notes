import React, { Fragment, useState } from 'react';
interface Props {
  id: string;
  title: string;
  description: string;
  onEdit: (editNote: any) => void;
}
const EditNote: React.FunctionComponent<Props> = ({
  id,
  title,
  description,
  onEdit,
}) => {
  const [titleToEdit, setTitleToEdit] = useState<string>(title);
  const [descriptionToEdit, setDescriptionToEdit] =
    useState<string>(description);

  const editNote = () => {
    const note = {
      id: id,
      title: titleToEdit,
      description: descriptionToEdit,
    };
    onEdit(note);
  };

  return (
    <Fragment>
      <label>Tytuł:*</label>
      <input
        value={titleToEdit}
        type="text"
        onChange={(event) => setTitleToEdit(event.target.value)}
      />

      <label>Opis:*</label>
      <input
        value={descriptionToEdit}
        type="text"
        onChange={(event) => setDescriptionToEdit(event.target.value)}
      />

      <button onClick={editNote}>Zapisz</button>
    </Fragment>
  );
};

export default EditNote;
