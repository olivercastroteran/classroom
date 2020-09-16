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
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_CLASS', class: course });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_CLASS_ERROR', err });
      });
  };
};
