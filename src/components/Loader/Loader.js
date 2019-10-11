import React from 'react';

import './Loader.css'

export default function Loader() {
  return(
    <div className="loader">
      <div className="loading-container">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

// this component is purely for loading animation while data is being fetched