import React from 'react';
import './ClassDetails.scss';
import Books from '../../assets/images/books.svg';
import { ReactComponent as EditBtn } from '../../assets/icons/edit-icon.svg';
import { ReactComponent as DeleteBtn } from '../../assets/icons/delete-icon.svg';

const ClassDetails = (props) => {
  let id = props.match.params.id;

  return (
    <div className="class-details">
      <div className="class-details__title">
        <h2>Class Title - {id}</h2>
        <span>Professor Oliver Castro Teran</span>
      </div>
      <div className="class-details__description">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non beatae,
          explicabo corporis porro, nisi ipsum dolore dolor accusantium magni
          quibusdam quia, tempora exercitationem! Voluptatibus veniam porro
          dolorem culpa, iusto vitae asperiores fugiat provident vel sunt!
        </p>
      </div>
      <div className="class-details__books">
        <h3>Books</h3>
        <ul>
          <li>JavaScript Fundamentals</li>
          <li>JavaScript ES6</li>
          <li>Ajax</li>
          <li>Node.js</li>
        </ul>
        <div className="img-container">
          <img src={Books} alt="books img" />
        </div>
      </div>
      <div className="class-details__edit">
        <DeleteBtn className="delete-btn" fill="red" />
        <EditBtn className="edit-btn" />
      </div>
    </div>
  );
};

export default ClassDetails;
