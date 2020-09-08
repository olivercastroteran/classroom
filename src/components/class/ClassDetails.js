import React from 'react';
import './ClassDetails.scss';

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
      </div>
    </div>
  );
};

export default ClassDetails;
