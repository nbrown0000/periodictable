import React from 'react';
import './Card.css';
import {getBackground} from './Util';



const Card = ({number, name, symbol, mass, category}) => {
  const cardStyle = {
    backgroundColor: `${getBackground(category)}`,
  };

  return(
    <div className='card' style={cardStyle}>
      <h3>{number}</h3>
      <h2>{symbol}</h2>
      <p>{name}</p>
      <p>{mass}</p>
    </div>
  )
}

export default Card;