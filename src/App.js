import React from 'react';
import './App.css';
import Header from './components/Header';
import Elements from './components/Elements';

function App() {
  return (
    <div className="App">
      <img src="https://kreditai.info/images/kreditoriai/bankai/Danske_Bank.png" alt="logo" width="300" height="70"></img>
      <Header/>
      <Elements/>
    </div>
  );
}

export default App;
