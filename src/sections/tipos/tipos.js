import React from 'react';
import './tipos.scss';
import Fondo from '../../imgs/table.jpg';
import Amargo from '../../imgs/dark.png';
import Semi from '../../imgs/semiamargo.png';
import Blanco from '../../imgs/white.png';
import Leche from '../../imgs/milk.png';
import Cartatipos from '../../components/cartatipos/cartatipos';

const Tipos = props =>{

const chocos = [
    {img: Amargo,
    titulo: "Amargo",
    descr: "También conocido como negro o puro. Es un tipo de chocolate hecho con granos de cacao tostado sin la adición de leche. Poseen un porcentaje de cacao desde el 70%."},
    {img: Semi,
        titulo: "Semiamargo",
        descr: "El tipo más flexible a la hora de combinar sabores. Usualmente se lo encuentra entre 50% y 70% de cacao aunque puede encontrarse de menor cantidad de %"},
    {img: Leche,
        titulo: "Con leche",
        descr: "texto con leche"},
    {img: Blanco,
        titulo: "Blanco",
        descr: "si, es chocolate"}];

    return(
<section className="tipos-contenedor" style={{backgroundImage: `url(${Fondo})`}}>
 <div><h1>Tipos de chocolate</h1>
 <span>Cada uno con su propia mágia y escencia</span></div>
<div className="tipos-chocoinfo">
{chocos.map(lates=>{ 
    return(
    <Cartatipos Imglate={lates.img}
                titulo={lates.titulo}
                descri={lates.descr} >
    </Cartatipos>
    );})}

</div>
</section>
    );
} 

export default Tipos;