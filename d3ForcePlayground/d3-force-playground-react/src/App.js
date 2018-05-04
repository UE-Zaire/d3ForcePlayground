import React, { Component } from 'react';
import ReactForce from './charting/ReactForce';
import RawForce from './charting/RawForce'
import RawD3 from './charting/RawD3'
import logo from './assets/zaire.logo.png';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Project: Zaire</h1>
        </header>
        {/* uber npm module ---> abstracts d3-force into a high level wrapped component */}
        {/* <ReactForce /> */}
        {/* raw d3 force */}
        {/* <svg width="800" height="600">
          <RawD3 x="80" y="300"/>
        </svg> */}
        <svg width="960" height="600">
          <RawForce x={960} y={600} />
        </svg>
      </div>
    );
  }
}

export default App;
