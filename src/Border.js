import React from 'react';
import BorderElement from './BorderElement';

const Border = () => {

  let borderElements = [];
  for(let i=1; i<=18; i++) {
    borderElements.push(
      <BorderElement key={i} xPos={i} yPos={0} name={i}/>
    )
  }

  return (
    <div>
        {/* {borderElements} */}
        Border
    </div>
  )
}

export default Border;