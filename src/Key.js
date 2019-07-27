import React from 'react';
import './ComponentStyles.css';
import Card from './Card';
import KeyTitle from './KeyTitle';

const Key = ({card}) => {
  return (
    <div id='key'>
      <KeyTitle
        id='title'
        name={card.name}
        category={card.category}
      />
      {/* <Summary/> */}
      <div id='key-summary'>
        <p>Atomic Mass: {card.atomic_mass}</p>
        <p>Melting Point: {card.melt} Kelvin</p>
        <p>Boiling point: {card.boil} Kelvin</p>
        <p>Appearance: {card.appearance}</p>
      </div>
      <Card
        key={card.number}
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