import React from 'react';
import Bloquetxt from '../bloquetxt/bloquetxt';
import './cartasblancas.scss'

const Cartasblancas = props =>{
  return(
<section className="cartasblancas-contenedor">
<img src={props.imgs} width="auto" height="240px"/>
<Bloquetxt titu={props.titulito}></Bloquetxt>
  <span>{props.fecha}</span>
<Bloquetxt txt={props.datos}></Bloquetxt>
</section>
    );
} 

export default Cartasblancas;