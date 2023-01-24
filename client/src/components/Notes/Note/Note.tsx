import React, { useState } from 'react';

interface Props {
  id: string;
  title: string;
  body: string;
  onDelete: (id: string) => void;
  onEdit: (id, title, body) => void;
}

const Note: React.FunctionComponent<Props> = ({
  id,
  title,
  body,
  onDelete,
  onEdit,
}) => {
  const [descriptionIsShown, setDescriptionIsShown] = useState(true);
  return (
    <div className="note">
      <p
        onClick={() => {
          setDescriptionIsShown(!descriptionIsShown);
        }}
      >
        {title}
      </p>
      {descriptionIsShown ? <div className="description">{body}</div> : null}
      <button onClick={() => onEdit(id, title, body)}>edytuj</button>
      <button onClick={() => onDelete(id)} className="delete">
        usuń
      </button>
    </div>
  );
};

export default Note;
