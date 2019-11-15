import React from 'react';
import logo from './assets/contele.png';
import Form from './pages/Form'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="logo">
          <img src={logo} alt="" srcset="" />  
        </div>
      </header>
      <Form></Form>
    </div>
  );
}

export default App;
