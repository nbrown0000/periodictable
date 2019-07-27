import React from 'react';
import './ComponentStyles.css';
import {getBackground} from './Util';

const Card = ({ number, name, symbol, mass, category, shells=[] }) => {
  const cardStyle = {
    backgroundColor: `${getBackground(category)}`
  };

  return(
    <div className='card-container' style={cardStyle}>
      <div key='1' className='card left'>
        <h3>{number}</h3>
        <h2>{symbol}</h2>
        <p>{name}</p>
        <p>{mass}</p>
      </div>
      
      <div key='2' className='card right'>
        {shells.map((item) => {
          return(
            <p>{item}</p>
          )
        })}
      </div>

      
    </div>
  )
}

export default Card;