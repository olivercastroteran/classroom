export const createClass = (course) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to DB
    const firestore = getFirestore();

    firestore
      .collection('classes')
      .add({
        ...course,
        professorFirstName: 'Oliver',
        professorLasstName: 'Castro',
        professorId: 123456,
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
