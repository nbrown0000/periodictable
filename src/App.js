import React, {Component} from 'react';
import './App.css';
import PeriodicTable from './PeriodicTable';
import 'tachyons';
import { elements } from './AllElements';
import Element from './Element';
import {getBackground} from './Util';

var defaultCard = {
  props: {
    atomic_mass: 0,
    background: "lightgray",
    category: "Category",
    name: "Name",
    number: 'Number',
    symbol: "Symbol"
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      elementsList: [],
      cardFace: defaultCard,
      selectedElements: []
    }
  }

  onPanelButtonClicked = (event) => {
    if(event[0] === 'period') {
      const selected = this.state.elementsList.filter(element => element.period===event[1])
      this.setState({selectedElements: selected});
    }
  }

  onHoverElement = (event) => {
    this.setState({cardFace: event})
  }

  onLeaveFocus = () => {
    this.setState({cardFace: defaultCard});
    // TODO: function to clear Key Right Side
  }

  componentDidMount() {
    this.setState({elementsList: elements.map((item,i)=>{
      return(
        <Element
          hoverFunction={() => this.setState({cardFace: this.state.elementsList[i]})}
          leaveFunction={() => this.onLeaveFocus()}
          key={i}
          number={item.number}
          name={item.name}
          symbol={item.symbol}
          xPos={item.xpos}
          yPos={item.ypos}
          category={item.category}
          link={item.source}
          atomic_mass={item.atomic_mass}
          size={1}
          background={getBackground(item.category)}
        />
      )
    })})
  }

  render() {
    // console.log(this.state.cardFace);
    // console.log(this.state.elementsList)
    // console.log(this.state.selectedElements);

    return (
      <div className='container'>
        <div id='header'>
          <h1>Periodic Table of Elements</h1>
        </div>
        <PeriodicTable
          panelButtonClicked={this.onPanelButtonClicked}
          list={this.state.elementsList}
          leaveFocus={this.onLeaveFocus}
          cardElement={this.state.cardFace}
        />
        <div id='footer'>
          <p>Designed and built by Nathan Brown</p>
        </div>
      </div>
    );
  }
}

export default App;
