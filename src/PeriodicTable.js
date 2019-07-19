import React from 'react';
import Element from './Element';
import './PeriodicTable.css';
import Key from './Key';

const PeriodicTable = ({list, hover, cardElement}) => {
  // console.log({cardElement})

  return (
    <div className='period-table'>
      <Key card={cardElement}/>
      {list.map((item,i) => {
        return (
          <Element
            hoverFunction={() => hover(list[i])}
            key={i}
            number={item.number}
            name={item.name}
            symbol={item.symbol}
            xPos={item.xpos}
            yPos={item.ypos}
            category={item.category}
            mass={item.atomic_mass}
          />
        )
      })}
    </div>
  )
}

export default PeriodicTable;