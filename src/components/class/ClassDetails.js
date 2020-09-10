import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import './ClassDetails.scss';
import Books from '../../assets/images/books.svg';
import { ReactComponent as EditBtn } from '../../assets/icons/edit-icon.svg';
import { ReactComponent as DeleteBtn } from '../../assets/icons/delete-icon.svg';

const ClassDetails = (props) => {
  const { course } = props;
  //console.log(course);

  if (course) {
    return (
      <div className="class-details">
        <div className="class-details__title">
          <h2>{course.title}</h2>
          <span>Professor {course.professor}</span>
        </div>
        <div className="class-details__description">
          <p>{course.description}</p>
        </div>
        <div className="class-details__books">
          <h3>Books</h3>
          <ul>
            {course.books.map((book, i) => {
              return <li key={i}>{book}</li>;
            })}
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
  } else {
    return (
      <div className="class-details">
        <p>Loading class...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const classes = state.firestore.data.classes;
  const course = classes ? classes[id] : null;

  return {
    course: course,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(['classes'])
)(ClassDetails);
