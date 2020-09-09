import React, { useState } from 'react';
import '../auth/auth.scss';
import { ReactComponent as AddBtn } from '../../assets/icons/plus-icon.svg';

const CreateClass = () => {
  const [title, setTitle] = useState('');
  const [professor, setProfessor] = useState('');
  const [description, setDescription] = useState('');
  const [book, setBook] = useState('');
  const [books, setBooks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ title, professor, description, books });
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
    <div className="form-container">
      <form onSubmit={submitHandler} autoComplete="off">
        <h5>Create Class</h5>
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
            placeholder="Professor"
            id="professor"
            autoComplete="off"
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
            required
          />
          <label htmlFor="professor">Professor</label>
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
          <button className="btn">Create Class</button>
        </div>
      </form>
    </div>
  );
};

export default CreateClass;
