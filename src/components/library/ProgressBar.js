import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';

const ProgressBar = ({ file, setFile, name }) => {
  const { url, progress } = useStorage(file);
  //console.log(progress, url, name);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <React.Fragment>
      <div className="progress-bar" style={{ width: progress + '%' }}></div>
      <p className="bar-percentage">{progress.toFixed(0)} %</p>
    </React.Fragment>
  );
};

export default ProgressBar;
