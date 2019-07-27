import React from 'react';
import Element from './Element';
import './ComponentStyles.css';
import Key from './Key';
import BorderElement from './BorderElement';

const PeriodicTable = ({list = [], hoverElement, cardElement}) => {
  // console.log({cardElement})

  let borderElements = [];
  for(let i=1; i<=18; i++) {
    borderElements.push(
      <BorderElement key={i} xPos={i} yPos={0} name={i}/>
    )
  }
  for(let j=1; j<=7; j++) {
    borderElements.push(
      <BorderElement key={j+18} xPos={0} yPos={j} name={j}/>
    )
  }

  return (
    <div id='period-table'>
      {borderElements}
      <Key card={cardElement}/>
      {list.map((item,i) => {
        return (
          <Element
            hoverFunction={() => hoverElement(list[i])}
            key={i}
            number={item.number}
            name={item.name}
            symbol={item.symbol}
            xPos={item.xpos}
            yPos={item.ypos}
            category={item.category}
            link={item.source}
          />
        )
      })}
    </div>
  )
}

export default PeriodicTable;