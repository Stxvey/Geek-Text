import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={makeCall}>
          Make API Call!
        </button>
      </header>
    </div>
  );
}

function makeCall(){
  fetch("/api").then(console.log("success"))
}

export default App;
