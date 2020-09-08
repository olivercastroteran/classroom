import React from 'react';

const ClassSummary = () => {
  return (
    <div className="card">
      <div className="card__header">
        <p className="class-title">JavaScript Master Class</p>
        <p className="professor">Oliver Castro Teran</p>
      </div>
      <div className="card__body">
        <p className="class-summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quas sit itaque fuga aspernatur dicta esse animi id iusto ipsa?
        </p>
      </div>
      <div className="card__date">
        <p>07/09/2020</p>
      </div>
    </div>
  );
};

export default ClassSummary;
