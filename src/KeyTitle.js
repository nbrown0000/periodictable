import React from 'react';
import {getBackground} from './Util';
import './ComponentStyles.css';

const KeyTitle = ({ name, category }) => {

  const divStyle = {
    backgroundColor: `${getBackground(category)}`
  };


  return(
    <div id='key-title' style={divStyle}>
      <h1>{name}</h1>
      <p>{category}</p>
    </div>
  );
}

export default KeyTitle;