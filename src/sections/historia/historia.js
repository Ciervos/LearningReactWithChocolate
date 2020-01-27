import React from 'react';
import Fondo from '../../imgs/chocobombones.jpg';
import './historia.scss'

const Historia = () =>{
    return(
<section className="historia-contenedor" style={{backgroundImage: `url(${Fondo})`}}>
<div><h1>Our Story</h1><span>Lorem impsun texto aqui que tal</span></div>
</section>
    );
} 

export default Historia;