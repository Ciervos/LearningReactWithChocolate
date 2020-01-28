import React from 'react';
import Fondo from '../../imgs/blacky.jpg';
import Primero from '../../imgs/uno.png';
import Segundo from '../../imgs/dos.png';
import Tercero from '../../imgs/tres.ico';
import Bloquetxt from '../../components/bloquetxt/bloquetxt';
import Sublink from '../../components/sublink/sublink';
import Bestbean from '../../components/bestbean/bestbean'
import './bestshop.scss'

const Bestshop = props =>{

    const iconitos =  [
        {img: Primero,
         titulo: "Me gusta"   
        },
    {
        img: Segundo,
        titulo: "El chocolate"
    },
    {
     img: Tercero,
     titulo: "De mil formas"}];

    return(
<section className="bestshop-contenedor" style={{backgroundImage: `url(${Fondo})`}}>
<div className="bestshop-subcontenedor"><Bloquetxt titu="THE BEST CHOCOLATE"></Bloquetxt>
<div className="bestshop-iconos-cont">{iconitos.map(lates=>{ 
    return(
    <Bestbean img={lates.img}
                titulo={lates.titulo} >
    </Bestbean>
    );})}</div>
<Bloquetxt txt="Dessert wafer liquorice jelly beans candy wafer cake toffee gummies. Cookie muffin fruitcake pastry. Halvah ice cream sesame snaps."></Bloquetxt>

<Sublink link="http://www.google.com" txt="About US"></Sublink>
</div>
</section>
    );
} 

export default Bestshop;