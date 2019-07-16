import React from 'react';
import './Element.css'

const Element = ({number, name, symbol, xPos, yPos, category, mass}) => {
  let elementBackground;
  switch(category) {
    case 'diatomic nonmetal':
      elementBackground = '#49ff49';
      break;
    case 'noble gas':
      elementBackground = '#91d6ff';
      break;
    case 'alkali metal':
      elementBackground = '#FFD557';
      break;
    case 'metalloid':
      elementBackground = '#96e4a3';
      break;
    case 'alkaline earth metal':
      elementBackground = '#ffff62';
      break;
    case 'polyatomic nonmetal':
      elementBackground = '#49ff49';
      break;
    case 'post-transition metal':
      elementBackground = '#aae3d4';
      break;
    case 'transition metal':
      elementBackground = '#e3c7c7';
      break;
    case 'lanthanide':
      elementBackground = '#ffc7ab';
      break;
    case 'actinide':
      elementBackground = '#f1c8e3';
      break;
    default:
      elementBackground = '#e3e3e3';
      break;
  }

  const divStyle = {
    'fontSize': '.7em',
    gridColumnStart: `${xPos}`,
    gridRowStart: `${yPos}`,
    backgroundColor: `${elementBackground}`
  };

  const pStyle = {
    
  }

  return (
    <div className='element' style={divStyle}>
      <p>{number}</p>
      <h2>{symbol}</h2>
      <p style={pStyle}>{name}</p>
      <p>{parseFloat(mass).toFixed(3)}</p>
    </div>
  )
}

export default Element;