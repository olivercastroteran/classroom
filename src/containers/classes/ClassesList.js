import React from 'react';
import ClassSummary from '../../components/class/ClassSummary';

const ClassesList = ({ classes }) => {
  return (
    <div className="classes-list__container">
      {classes &&
        classes.map((course) => {
          return <ClassSummary key={course.id} course={course} />;
        })}
    </div>
  );
};

export default ClassesList;
