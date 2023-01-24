import React from 'react';

interface Props {
  id: string;
  title: string;
  body: string;
}

const Note: React.FunctionComponent<Props> = ({ id, title, body }) => {
  return (
    <div className="note">
      <p>{title}</p>
      <div className="description">{body}</div>
      <button>edytuj</button>
      <button className="delete">usuń</button>
    </div>
  );
};

export default Note;
