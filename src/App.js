import React, { Component } from 'react';
import './App.css';

import ProductSpecification from './components/product-specification'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lazada test</h1>
        <ProductSpecification />
      </div>
    );
  }
}

export default App;
    