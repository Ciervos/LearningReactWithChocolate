import React from 'react';
import Fondo from '../../imgs/blacky.jpg';
import Primero from '../../imgs/chocouno.jpg';
import Segundo from '../../imgs/chocodos.jpg';
import Tercero from '../../imgs/chocotres.jpg';
import './trimagenes.scss'

const Trimagenes = props =>{

    const chocoimg =  [
        {img: Primero
        },
    {
        img: Segundo
    },
    {
     img: Tercero}];

    return(
<section className="trimagenes-contenedor">
{chocoimg.map(imgs=>{ 
    return(
  <img src={imgs.img} height="500px" width="auto"/>

    );})}
</section>
    );
} 

export default Trimagenes;