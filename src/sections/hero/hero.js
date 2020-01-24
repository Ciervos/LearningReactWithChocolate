import React from 'react';
import Fondo from '../../imgs/bombones.jpg';
import './hero.scss'

const Ineedahero = () =>{
    return(
<section className="mainhero" style={{backgroundImage: `url(${Fondo})`}}>
<div className="hero-cajatexto"><h1>L♥ve Chocolate</h1>
    <span>Alimento de los dioses</span></div>
</section>
    );
} 

export default Ineedahero;