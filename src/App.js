import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ineedahero from './sections/hero/hero';
import Tipos from './sections/tipos/tipos';
import Historia from './sections/historia/historia';
import Beans from './sections/beans/beans';
import Grand from './sections/grandcru/grandcru';
import Bestshop from './sections/bestshop/bestshop';
import Trimagenes from './sections/trimagenes/trimagenes';


function App() {
  return (
    <div>
    <Ineedahero></Ineedahero>
    <Tipos></Tipos>
    <Historia></Historia>
    <Beans></Beans>
    <Grand></Grand>
    <Bestshop></Bestshop>
    <Trimagenes></Trimagenes>
    </div>
  );
}

export default App;
