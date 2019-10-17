import React from 'react';
import { getLegendData } from './Util'

const Legend = ({clicked}) => {
  return (
    <div id='legend'>

      <div id='groups' className='legend-section'>
        <label>Groups</label>
        <input type='button' value='1' onClick={() => clicked(getLegendData('Group','1'))}/>
        <input type='button' value='2' onClick={() => clicked(getLegendData('Group','2'))}/>
        <input type='button' value='3' onClick={() => clicked(getLegendData('Group','3'))}/>
        <input type='button' value='4' onClick={() => clicked(getLegendData('Group','4'))}/>
        <input type='button' value='5' onClick={() => clicked(getLegendData('Group','5'))}/>
        <input type='button' value='6' onClick={() => clicked(getLegendData('Group','6'))}/>
        <input type='button' value='7' onClick={() => clicked(getLegendData('Group','7'))}/>
        <input type='button' value='8' onClick={() => clicked(getLegendData('Group','8'))}/>
        <input type='button' value='9' onClick={() => clicked(getLegendData('Group','9'))}/>
        <input type='button' value='10' onClick={() => clicked(getLegendData('Group','10'))}/>
        <input type='button' value='11' onClick={() => clicked(getLegendData('Group','11'))}/>
        <input type='button' value='12' onClick={() => clicked(getLegendData('Group','12'))}/>
        <input type='button' value='13' onClick={() => clicked(getLegendData('Group','13'))}/>
        <input type='button' value='14' onClick={() => clicked(getLegendData('Group','14'))}/>
        <input type='button' value='15' onClick={() => clicked(getLegendData('Group','15'))}/>
        <input type='button' value='16' onClick={() => clicked(getLegendData('Group','16'))}/>
        <input type='button' value='17' onClick={() => clicked(getLegendData('Group','17'))}/>
        <input type='button' value='18' onClick={() => clicked(getLegendData('Group','18'))}/>
      </div>

      <div id='blocks' className='legend-section'>
        <label>Blocks</label>
        <input type='button' value='s' onClick={() => clicked(getLegendData('Block','s'))}/>
        <input type='button' value='p' onClick={() => clicked(getLegendData('Block','p'))}/>
        <input type='button' value='d' onClick={() => clicked(getLegendData('Block','d'))}/>
        <input type='button' value='f' onClick={() => clicked(getLegendData('Block','f'))}/>
      </div>

      <div id='periods' className='legend-section'>
        <label>Periods</label>
        <input type='button' value='1' onClick={() => clicked(getLegendData('Period','1'))}/>
        <input type='button' value='2' onClick={() => clicked(getLegendData('Period','2'))}/>
        <input type='button' value='3' onClick={() => clicked(getLegendData('Period','3'))}/>
        <input type='button' value='4' onClick={() => clicked(getLegendData('Period','4'))}/>
        <input type='button' value='5' onClick={() => clicked(getLegendData('Period','5'))}/>
        <input type='button' value='6' onClick={() => clicked(getLegendData('Period','6'))}/>
        <input type='button' value='7' onClick={() => clicked(getLegendData('Period','7'))}/>
        <input type='button' value='Lanthanides' onClick={() => clicked(getLegendData('Period','9'))}/>
        <input type='button' value='Actinides' onClick={() => clicked(getLegendData('Period','10'))}/>
      </div>

      <div id='classification' className='legend-section'>
        <label>Classification</label>
        <input type='button' value='Metals' onClick={() => clicked(getLegendData('Metals','1'))}/>
        <input type='button' value='Non-Metals' onClick={() => clicked(getLegendData('Non-Metals','1'))}/>
        <input type='button' value='Clear filters' onClick={() => clicked(getLegendData('clear','0'))}/>
      </div>

    </div>
  )
}

export default Legend;