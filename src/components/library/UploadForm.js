import React, { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && selected.type === 'application/pdf') {
      setFile(selected);
      setError('');
      console.log(selected);
    } else {
      setFile(null);
      setError('Please select a PDF document');
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
