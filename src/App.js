import React, {Component} from 'react';
import './App.css';
import './ComponentStyles.css'
import { elements } from './AllElements';
import { getBackground } from './Util';
import Card from './Card';
import Legend from './Legend';



class App extends Component {
  constructor() {
    super();
    this.state = {
      elementsList: [],
      selected: null,
      mode: 'default',
      legendInfo: null
    }
  }

  resetColours() {
    this.setState({elementsList: this.state.elementsList.map(el => {
      el.color=getBackground(el.category);
      el.border=getBackground(el.category);
      return el;
    })})
  }

  // *** WORKING FROM HERE ***
  legendButtonClicked = event => {
    // console.log(event.title)
    // console.log(event.content)

    this.setState({mode: 'legend'})

    if(event.title==='clear') {
      this.resetColours();
      this.setState({mode: 'default'})
    }


    var TYPE = 0;
    var INDEX = 0;
    if(event !== 'clear') {
      TYPE = event.title.split(" ")[0];
      INDEX = parseInt(event.title.split(" ")[1],10);
    }

    if(event.title==='Metals') {
      const metalsArray = [
        3,4,11,12,13,19,20,21,22,23,24,25,26,27,28,29,30,31,
        37,38,39,40,41,42,43,44,45,46,47,48,49,50,55,56,
        72,73,74,75,76,77,78,79,80,81,82,83,84,87,88,104,
        105,106,107,108,109,110,111,112,
        57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,
        89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,
        113,114,115,116
      ]
      const transMetalsArray = [5,14,32,33,51,52]

      this.resetColours()
      this.setState({elementsList: this.state.elementsList.map(el => {
        if(!metalsArray.concat(transMetalsArray).includes(el.number)) el.color='lightgray'
        if(transMetalsArray.includes(el.number)) el.border=`2px dashed black`
        return el;
      })})
    }

    if(event.title==='Non-Metals') {
      const nonMetalArray = [1,2,6,7,8,9,10,15,16,17,18,34,35,36,53,54,85,86]
      const transMetalsArray = [5,14,32,33,51,52]

      this.resetColours()
      this.setState({elementsList: this.state.elementsList.map(el => {
        if(!nonMetalArray.concat(transMetalsArray).includes(el.number)) el.color='lightgray'
        if(transMetalsArray.includes(el.number)) el.border=`2px dashed black`
        return el;
      })})
    }

    // type is block
    if(event.title.split(" ")[1]==='Block') {
      switch(event.title.split(" ")[0]) {
        case 'S':
          this.resetColours()
          this.setState({elementsList: this.state.elementsList.map(el => {
            if(el.xpos!==1 && el.xpos!==2 && el.number!==2) el.color='lightgray'
            return el;
          })})
          break;

        case 'P':
          this.resetColours()
          this.setState({elementsList: this.state.elementsList.map(el => {
            if(![13,14,15,16,17,18].includes(el.xpos)) el.color='lightgray'
            if(el.number===2) el.color='lightgray'
            return el;
          })})
          break;
        
        case 'D':
          this.resetColours()
          this.setState({elementsList: this.state.elementsList.map(el => {
            if(![3,4,5,6,7,8,9,10,11,12].includes(el.xpos)) el.color='lightgray'
            if(el.ypos===9 || el.ypos===10) el.color='lightgray'
            return el;
          })})
          break;

        case 'F':
          this.resetColours()
          this.setState({elementsList: this.state.elementsList.map(el => {
            if(el.ypos!==9 && el.ypos!==10) el.color='lightgray'
            return el;
          })})
          break;
  
        
        default: break;
      }
      
    }



    // console.log(`TYPE: ${TYPE}`)
    // console.log(`INDEX: ${INDEX}`)

    if(TYPE==='Group') {
      this.resetColours()
      this.setState({elementsList: this.state.elementsList.map(el => {
        if(el.xpos!==INDEX || el.category==='lanthanide' || el.category==='actinide') el.color='lightgray'
        return el;
      })})
    }

    if(TYPE==='Period') {
      this.resetColours()
      this.setState({elementsList: this.state.elementsList.map(el => {
        if(el.ypos!==INDEX) el.color='lightgray'
        if(INDEX===6 && el.ypos===9) el.color=getBackground(el.category)
        if(INDEX===7 && el.ypos===10) el.color=getBackground(el.category)
        return el;
      })})
      
    }

    if(TYPE==='Lanthanides') {
      this.resetColours()
      this.setState({elementsList: this.state.elementsList.map(el => {
        if(el.category!=='lanthanide') el.color='lightgray'
        return el;
      })})
    }

    if(TYPE==='Actinides') {
      this.resetColours()
      this.setState({elementsList: this.state.elementsList.map(el => {
        if(el.category!=='actinide') el.color='lightgray'
        return el;
      })})
    }

    if(TYPE==='Block') {

    }

    this.setState({legendInfo: {
      title: event.title,
      content: event.content
    }})

    // if(event[0]==='Period') {
    //   this.resetColours()
    //   this.setState({elementsList: this.state.elementsList.map(el => {
    //     if(el.ypos!==event[1]) el.color='lightgray'
    //     if(event[1]===6 && el.category==='lanthanide') el.color=getBackground(el.category)
    //     if(event[1]===7 && el.category==='actinide') el.color=getBackground(el.category)
    //     return el;
    //   })})
    // }
  }
  // *** TO HERE ***

  onHover(element) {
    this.setState({selected: element})
  }

  onLeave() {
    this.setState({selected: null})
  }

  componentDidMount() {
    const list = elements.map(item => {
      item.color=getBackground(item.category);
      item.onHover=this.onHover;
      item.border = getBackground(item.category);
      return item;
    })
    this.setState({elementsList: list})
  }

  render() {
    // console.log(this.state.legendInfo)
    // console.log(legendData.Group[1])
    // console.log(this.state.legendInfo)
    // console.log(`MODE: ${this.state.mode}`);
    // console.log(this.state.selected);
    // console.log(this.state.elementsList)


    return (
      <div className='container'>

        <div className='headerfooter'>
          <h1>Periodic Table of Elements</h1>
        </div>

      <div id='content'>
        <Legend clicked={(event) => this.legendButtonClicked(event)}/>

        <div id='period-table-container'>
          {
            this.state.elementsList.map(item => {

              const elementStyle = {
                gridColumnStart: `${item.xpos}`,
                gridRowStart: `${item.ypos}`,
                backgroundColor: `${item.color}`,
                border: `${item.border}`
              }

              return (
                <a
                  key={item.symbol}
                  href={item.source}
                  className='element'
                  style={elementStyle}
                  onMouseEnter={()=>this.onHover(item)}
                  onMouseLeave={()=>this.onLeave()}
                >  
                  <p>{item.number}</p>
                  <h2>{item.symbol}</h2>
                </a>
              )
            })
          }
          
          <Card
            mode={this.state.mode}
            selected={this.state.selected}
            legendInfo={this.state.legendInfo}
          />
        </div>
      </div>
        
        <div className='headerfooter'>
          <p>Designed and built by Nathan Brown</p>
        </div>

      </div>
    );
  }
}

export default App;
