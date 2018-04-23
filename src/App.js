import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GameGrid from './containers/game_grid';
import GameInfo from './containers/game_info';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameGrid />
        <GameInfo />
      </div>
    );
  }
}

export default App;
