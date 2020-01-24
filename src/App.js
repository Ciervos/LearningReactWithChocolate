import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ineedahero from './sections/hero/hero';
import Tipos from './sections/tipos/tipos';
import Historia from './sections/historia/historia';

function App() {
  return (
    <div>
    <Ineedahero></Ineedahero>
    <Tipos></Tipos>
    <Historia></Historia>
    </div>
  );
}

export default App;
