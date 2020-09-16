import React from 'react';
import ClassSummary from '../../components/class/ClassSummary';
import { Link } from 'react-router-dom';

const ClassesList = ({ classes }) => {
  return (
    <div className="classes-list__container">
      {classes &&
        classes.map((course) => (
          <Link key={course.id} to={`/classes/${course.id}`}>
            <ClassSummary course={course} />
          </Link>
        ))}
    </div>
  );
};

export default ClassesList;
