import React from "react";

function Task({category, text, handleDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={event => handleDelete(text)}>X</button>
    </div>
  );
}

export default Task;
