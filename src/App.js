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
      return el;
    })})
  }

  // *** WORKING FROM HERE ***
  legendButtonClicked = event => {
    // console.log(event.title)
    // console.log(event.content)
    console.log()

    this.setState({mode: 'legend'})
    this.setState({legendInfo: {
      title: event.title,
      content: event.content,
    }})

    if(event==='clear') {
      this.resetColours();
      this.setState({mode: 'default'})
    }

    var TYPE
    var INDEX
    if(event !== 'clear') {
      TYPE = event.title.split(" ")[0];
      INDEX = parseInt(event.title.split(" ")[1],10);
    }

    if(TYPE==='Group') {
      this.resetColours()
      this.setState({elementsList: this.state.elementsList.map(el => {
        if(el.xpos!==INDEX || el.category==='lanthanide' || el.category==='actinide') el.color='lightgray'
        return el;
      })})
      this.setState({legendInfo: {
        title: event.title,
        content: event.content
      }})
    }

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
                backgroundColor: `${item.color}`
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
