import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import Books from '../../assets/images/books.svg';

const DocsGrid = () => {
  const { docs } = useFirestore('library');
  return (
    <div className="docs-grid">
      {docs &&
        docs.map((doc) => (
          <div className="doc-wrap" key={doc.id}>
            <a href={doc.url} target="_blank" rel="noopener noreferrer">
              <img src={Books} alt="books" />
              <span>{doc.name}</span>
            </a>
          </div>
        ))}
    </div>
  );
};

export default DocsGrid;
