export const createClass = (course) => {
  return (dispatch, getState) => {
    // Make async call to DB
    dispatch({ type: 'CREATE_CLASS', class: course });
  };
};
