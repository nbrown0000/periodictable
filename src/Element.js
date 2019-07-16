import React from 'react';
import './Element.css'

const Element = ({number, name, symbol, xPos, yPos, category}) => {
  
  const divStyle = {
    gridColumnStart: `${xPos}`,
    gridRowStart: `${yPos}`
  };

  const pStyle = {
    'fontSize': '.7em'
  }

  return (
    <div className='element' style={divStyle}>
      <p>{number}</p>
      <h2>{symbol}</h2>
      <p style={pStyle}>{name}</p>
      {/* <p>{hydrogen.atomic_mass}</p> */}
    </div>
  )
}

export default Element;