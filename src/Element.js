import React from 'react';
import './Element.css'

const Element = () => {
  const hydrogen = {
    atomic_number: 1,
    symbol: 'H',
    name: 'Hydrogen',
    atomic_mass: 1.008
  }

  return (
    <div className='element'>
      <p>{hydrogen.atomic_number}</p>
      <h2>{hydrogen.symbol}</h2>
      <p>{hydrogen.name}</p>
      <p>{hydrogen.atomic_mass}</p>
    </div>
  )
}

export default Element;