import React, { Component } from 'react';
import NavBar from "./components/navbar/NavBar"
import './App.css';
import MiniDrawer from "./components/menu/MiniDrawer";
import ClippedDrawer from "./components/permanent-side/ClippedDrawer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClippedDrawer />
      </div>
    );
  }
}

export default App;
