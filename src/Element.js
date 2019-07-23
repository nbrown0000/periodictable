import React from 'react';
import './Element.css'
import {getBackground} from './Util';


const Element = ({number, name, symbol, xPos, yPos, category, mass, hoverFunction}) => {
  const elementBackground = getBackground(category);

  const divStyle = {
    'fontSize': '.7em',
    gridColumnStart: `${xPos+1}`,
    gridRowStart: `${yPos+1}`,
    backgroundColor: `${elementBackground}`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-around`
  };

  const pStyle = {
    
  }

  return (
    <div className='element' style={divStyle} onMouseOver={hoverFunction}>
      <p>{number}</p>
      <h2>{symbol}</h2>
      <p style={pStyle}>{name}</p>
      {/* <p>{parseFloat(mass).toFixed(3)}</p> */}
    </div>
  )
}

export default Element;