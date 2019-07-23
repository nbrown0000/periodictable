import React, {Component} from 'react';
import './App.css';
import PeriodicTable from './PeriodicTable';
import 'tachyons';
import { elements } from './AllElements';

class App extends Component {
  constructor() {
    super();
    this.state = {
      elementsList: [],
      cardFace: {}
    }
  }

  onHoverElement = (event) => {
    this.setState({cardFace: event})
  }

  componentDidMount() {
    this.setState({elementsList: elements})
  }

  render() {
    // console.log(this.state.elementsList)

    return (
      <div className='container'>
        <h1>Periodic Table of Elements</h1>
        <PeriodicTable
          list={this.state.elementsList}
          hoverElement={this.onHoverElement}
          cardElement={this.state.cardFace}
        />
      </div>
    );
  }
}

export default App;
