import React from 'react';
import './ComponentStyles.css';
import {getBackground} from './Util';


const Element = ({number, symbol, xPos, yPos, category, link, hoverFunction, leaveFunction}) => {

  const divStyle = {
    gridColumnStart: `${xPos}`,
    gridRowStart: `${yPos}`,
    backgroundColor: `${getBackground(category)}`
  }

  return (
    <a id='link' href={link} className='element' style={divStyle}
            onMouseEnter={hoverFunction} onMouseLeave={leaveFunction}>
      <p>{number}</p>
      <h2>{symbol}</h2>
    </a>
  )
}

export default Element;