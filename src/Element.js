import React from 'react';
import './ComponentStyles.css';
import {getBackground} from './Util';


const Element = ({number, name, symbol, xPos, yPos, category, link, hoverFunction}) => {
  const elementBackground = getBackground(category);
  var divStyle = {
    gridColumnStart: `${xPos+1}`,
    gridRowStart: `${yPos+1}`,
    backgroundColor: `${elementBackground}`
  }

  return (
    <a id='link' href={link} className='element' style={divStyle} onMouseOver={hoverFunction}>
      <p>{number}</p>
      <h2>{symbol}</h2>
      <p>{name}</p>
    </a>
  )
}

export default Element;