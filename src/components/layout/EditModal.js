import React from 'react';
import './Modal.scss';

const EditModal = (props) => {
  return (
    <div className="modal">
      <h3>Edit modal for: {props.title}</h3>
      <button className="edit-button" onClick={props.editCourse}>
        Edit
      </button>
    </div>
  );
};

export default EditModal;
