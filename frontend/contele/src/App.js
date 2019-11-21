import React from 'react';
import logo from './assets/contele.png';
import Routes from './routes'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="logo">
          <img src={logo} alt="Contele-logo" />  
        </div>
      </header>
      <div id="component">
        <Routes></Routes>
      </div>
      
    </div>
  );
}

export default App;
