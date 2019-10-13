import React from 'react';
import './ComponentStyles.css'
import { getBackground } from './Util';

const Card = ({ mode, selected, legendInfo }) => {
  const defaultTitleStyle = {
    backgroundColor: `lightgray`,
  }
  const defaultInfoStyle = {
    border: `1px solid lightgray`
  }
  var cardFaceStyle;
  var cardInfoStyle;

  if(selected != null) {
    cardFaceStyle = { backgroundColor: `${getBackground(selected.category)}` }
    cardInfoStyle = { border: `1px solid ${selected.color}` }
  } else {
    cardFaceStyle = { backgroundColor: `lightgray` }
    cardInfoStyle = { border: `1px solid lightgray` }
  }

  // Default card as variable
  const defaultCard = 
  <div className='card'>
    <h1 className='cardtitle' style={cardFaceStyle}>Periodic Table</h1>
    <p className='cardDefaultText'>
      The periodic table is a tabular display of the chemical elements.
      The arrangement is by atomic number, electron configuration,
      and recurring chemical properties.
    </p>
  </div>;

  // Element card as variable
  var elementCard;
  if(selected!==null) {
    elementCard = 
    <div className='card'>
      <h1 className='cardtitle' style={cardFaceStyle}>{selected.name}</h1>

      <div className='cardDetail' style={cardInfoStyle}>
      <div className='cardface' style={cardFaceStyle}>
        <p>{selected.number}</p>
        <h2>{selected.symbol}</h2>
      </div>

      <div className='cardInfo'>
        <p>Atomic Mass: {selected.atomic_mass}</p>
        <p>Melting Point: {selected.melt} K</p>
        <p>Boiling Point: {selected.boil} K</p>
        <p>Phase (room temp): {selected.phase}</p>
      </div>
      </div>

    </div>;
  }

  // Legend Card as variable
  var legendCard;
  if(legendInfo!==null) {
    legendCard =
  <div className='card'>
    <h1 className='cardtitle' style={defaultTitleStyle}>{legendInfo.title}</h1>
    <p className='cardDefaultText' style={defaultInfoStyle}>
      {legendInfo.content}
    </p>
  </div>;
  }




  return (

    mode==='default'
    ?
      selected===null
      ?
      defaultCard
      :
      elementCard
    :

    mode==='legend'
    ?
    legendCard
    :
    <div></div>
  )
}

export default Card;