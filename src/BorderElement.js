import React from 'react';
import './ComponentStyles.css';


const BorderElement = ({name, xPos, yPos}) => {

  const divStyle = {
    'fontSize': '.7em',
    gridColumnStart: `${xPos+1}`,
    gridRowStart: `${yPos+1}`,
    display: `flex`,
    flexDirection: `row`,
    width: `60px`,
    height: `60px`
  };

  return (
    <div className='borderElement' style={divStyle}>
      <h2>{name}</h2>
    </div>
  )
}

export default BorderElement;