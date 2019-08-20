import React from 'react';
import './ComponentStyles.css';
import Key from './Key';
import Panel from './Panel';

const PeriodicTable = ({list, panelButtonClicked, cardElement}) => {
  // console.log({cardElement})

  return (
    <div id='container'>
      <Panel panelButton={panelButtonClicked}/>

      <div id='period-table-container'>
        <Key
          card={cardElement.props}/>
        {list}
      </div>
    </div>
  )
}

export default PeriodicTable;