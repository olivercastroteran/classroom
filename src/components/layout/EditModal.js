import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../containers/auth/auth.scss';
import './Modal.scss';
import { ReactComponent as AddBtn } from '../../assets/icons/plus-icon.svg';
import { editClass } from '../../store/actions/classActions';

const CreateClass = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [book, setBook] = useState('');
  const [books, setBooks] = useState([]);

  const { course, courseId } = props;

  const submitHandler = (e) => {
    e.preventDefault();
    let updatedCourse = { ...course, title, description, books, courseId };
    console.log(updatedCourse);
    props.editCourse(updatedCourse);
    props.closeEditModal();
  };

  const addBook = () => {
    setBooks([...books, book]);
    setBook('');
  };

  const deleteBook = (book) => {
    const bookIndex = books.indexOf(books.find((element) => element === book));
    let newBooks = books.filter((book, i) => i !== bookIndex);
    setBooks(newBooks);
  };

  return (
    <div className="modal form-container">
      <form onSubmit={submitHandler} autoComplete="off">
        <h5>Edit Class</h5>
        <div className="input-field">
          <input
            type="text"
            placeholder="Class Title"
            id="title"
            autoComplete="off"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="title">Class Title</label>
        </div>

        <div className="input-field">
          <input
            type="text"
            placeholder="Description"
            id="description"
            autoComplete="off"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label htmlFor="description">Description</label>
        </div>

        <div className="input-field">
          <input
            autoComplete="off"
            type="text"
            placeholder="Add Book"
            id="book"
            value={book}
            onChange={(e) => setBook(e.target.value)}
          />
          <label htmlFor="books">Add Book</label>
          <div className="add-btn">
            <AddBtn onClick={addBook} />
          </div>
          <ul>
            {books.map((book) => {
              return (
                <li
                  key={Math.random()}
                  onClick={(e) => deleteBook(e.target.innerHTML)}
                >
                  {book}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="input-field">
          <button className="edit-button" onClick={submitHandler}>
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    editCourse: (updatedCourse) => dispatch(editClass(updatedCourse)),
  };
};

export default connect(null, mapDispatchToProps)(CreateClass);
