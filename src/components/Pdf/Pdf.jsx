import React from 'react';
import { saveAs } from 'file-saver';
import Pdf1 from '../../assets/25109.pdf';

const Pdf = () => {
  const downloadPdf = () => {
    fetch(Pdf1)
      .then(response => response.blob())
      .then(blob => saveAs(blob, 'EffictiveMinerals.pdf'))
      .catch(error => console.log(error));
  };
  
  return (
    <div>
      <button onClick={downloadPdf}>Download PDF</button>
    </div>
  );
}

export default Pdf;
