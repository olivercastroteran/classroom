import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import './ClassDetails.scss';
import Books from '../../assets/images/books.svg';
import { ReactComponent as EditBtn } from '../../assets/icons/edit-icon.svg';
import { ReactComponent as DeleteBtn } from '../../assets/icons/delete-icon.svg';
import { Redirect } from 'react-router-dom';
import DeleteModal from '../layout/DeleteModal';
import EditModal from '../layout/EditModal';
import { deleteClass } from '../../store/actions/classActions';

const ClassDetails = (props) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const { course, auth } = props;
  //console.log(course);
  if (!auth.uid) return <Redirect to="/login" />;

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
        {course.userId === auth.uid ? (
          <div className="class-details__edit">
            <DeleteBtn
              onClick={() => setIsDeleteOpen(!isDeleteOpen)}
              className="delete-btn"
              fill="red"
            />
            <EditBtn
              onClick={() => setIsEditOpen(!isEditOpen)}
              className="edit-btn"
            />
          </div>
        ) : null}
        {isDeleteOpen ? (
          <>
            <div
              onClick={() => setIsDeleteOpen(false)}
              className="backdrop"
            ></div>
            <DeleteModal
              title={course.title}
              deleteCourse={() => {
                props.deleteCourse(props.courseId);
                props.history.push('/');
              }}
            />
          </>
        ) : null}
        {isEditOpen ? (
          <>
            <div
              onClick={() => setIsEditOpen(false)}
              className="backdrop"
            ></div>
            <EditModal
              course={course}
              courseId={props.courseId}
              closeEditModal={() => setIsEditOpen(false)}
            />
          </>
        ) : null}
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
    auth: state.firebase.auth,
    courseId: ownProps.match.params.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCourse: (courseId) => dispatch(deleteClass(courseId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(['classes'])
)(ClassDetails);
