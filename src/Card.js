import React from 'react';
import './Card.css';

const Card = ({number, name, symbol, mass}) => {
  return(
    <div className='card'>
      <h3>{number}</h3>
      <h2>{symbol}</h2>
      <p>{name}</p>
      <p>{mass}</p>
    </div>
  )
}

export default Card;