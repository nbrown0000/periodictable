import React from 'react';
import './ComponentStyles.css';

const Key = ({card = ''}) => {
  // console.log(card);

  const keyStyle = {
    background: `${card.background}`
  };

  return (
    <div id='key'>
      <div id='key-left' style={keyStyle}>
        <p>{card.number}</p>
        <h1>{card.symbol}</h1>
        
        <p id='key-cat'>{card.category}</p>
      </div>

      <div id='key-right'>
        <h2>{card.name}</h2>
        <p>Atomic Mass: {card.atomic_mass}</p>
        <p>Melting Point: {card.melt}</p>
        <p>Boiling Point: {card.boil}</p>
        <p>Discovered By: {card.discovered_by}</p>
      </div>      
    </div>
  )
}

export default Key;