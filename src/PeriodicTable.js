import React from 'react';
import Element from './Element';
import './PeriodicTable.css'

const PeriodicTable = ({list}) => {
  
  return (
    <div className='period-table'>
      {list.map((item,i) => {
        return (
          <Element
            key={i}
            number={item.number}
            name={item.name}
            symbol={item.symbol}
            xPos={item.xpos}
            yPos={item.ypos}
            category={item.category}
          />
        )
      })}
    </div>
  )
}

export default PeriodicTable;