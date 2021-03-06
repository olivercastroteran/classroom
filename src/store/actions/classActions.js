export const createClass = (course) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to DB
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const uid = getState().firebase.auth.uid;

    firestore
      .collection('classes')
      .add({
        ...course,
        professorFirstName: profile.firstName,
        professorLastName: profile.lastName,
        userId: uid,
        createdAt: new Date().toString(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_CLASS', class: course });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_CLASS_ERROR', err });
      });
  };
};

export const deleteClass = (classId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('classes')
      .doc(classId)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_CLASS' });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_CLASS_ERROR', err });
      });
  };
};

export const editClass = (updatedCourse) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('classes')
      .doc(updatedCourse.courseId)
      .update({
        ...updatedCourse,
      })
      .then(() => {
        dispatch({ type: 'UPDATED_CLASS' });
      })
      .catch((err) => {
        dispatch({ type: 'UPDATED_CLASS_ERROR', err });
      });
  };
};
