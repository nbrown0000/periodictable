import React from 'react';
import './Key.css';
import Card from './Card';

const Key = ({card}) => {
  return (
    <div id='key'>
      <Card
        className='card'
        number={card.number}
        name={card.name}
        symbol={card.symbol}
        mass={card.atomic_mass}
        category={card.category}
        shells={card.shells}
      />
    </div>
  )
}

export default Key;