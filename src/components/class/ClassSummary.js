import React from 'react';

const ClassSummary = ({ course }) => {
  return (
    <div className="card">
      <div className="card__header">
        <p className="class-title">{course.title}</p>
        <p className="professor">
          {course.professorFirstName} {course.professorLastName}
        </p>
      </div>
      <div className="card__body">
        <p className="class-summary">{course.description}</p>
      </div>
      <div className="card__date">
        <p>{course.createdAt.slice(0, 15)}</p>
      </div>
    </div>
  );
};

export default ClassSummary;
