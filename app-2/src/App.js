import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      dreamCars : [
        'Ferrari',
        'Lamborghini',
        'Koenigsegg',
        'Mclaren',
        'Tesla'
      ]
    }
  }


  render() {
    let displayCars = this.state.dreamCars.map( (element, index) => {
      return (
        <h2 key={ index }>{ element }</h2>
      )
    })

    return (
      <div className="App">
        { displayCars }
      </div>
    );

  }
}
    
  

export default App;
