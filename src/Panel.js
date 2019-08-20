import React from 'react';

const Panel = ({panelButton}) => {
  return (
    <div id='panel'>

      <div className='row'>

        <div className='set'>
          <label>Temperature:</label>
          <input
            id='temperature'
            type='range'
            min='0'
            max='5000'
            defaultValue={0}
            // onChange={this.handleSliderChange}
            step='1'
          />
        </div>
        <div className='set'>
          <label>Classification:</label>
          <button>Metal</button>
          <button>Non-Metal</button>
          
        </div>
        <div className='set'>
          <button>Clear Filters</button>
        </div>

      </div>

      <div className='row'>

        <div className='set'>
          Groups: 
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>10</button>
          <button>11</button>
          <button>12</button>
          <button>13</button>
          <button>14</button>
          <button>15</button>
          <button>16</button>
          <button>17</button>
          <button>18</button>
        </div>

        <div className='set'>
          <label>Blocks:</label>
          <button>s</button>
          <button>p</button>
          <button>d</button>
          <button>f</button>
        </div>

        <div className='set'>
          <label>Periods:</label>
          <button onClick={() => this.panelButton(['period','1'])}>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>Lanthanides</button>
          <button>Actinides</button>
        </div>

      </div>
      
    </div>
  )
}

export default Panel;