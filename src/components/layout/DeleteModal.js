import React from 'react';
import './Modal.scss';

const DeleteModal = (props) => {
  return (
    <div className="modal">
      <h3>
        Are you sure you want to delete: <span>{props.title}</span>
      </h3>
      <button className="delete-button" onClick={props.deleteCourse}>
        Delete
      </button>
    </div>
  );
};

export default DeleteModal;
