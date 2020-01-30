import React from 'react';
import Fondo from '../../imgs/blacky.jpg';
import Primero from '../../imgs/uno.png';
import Segundo from '../../imgs/dos.png';
import Tercero from '../../imgs/tres.ico';
import Bloquetxt from '../../components/bloquetxt/bloquetxt';
import Sublink from '../../components/sublink/sublink';
import Bestbean from '../../components/bestbean/bestbean';
import './bestshop.scss'

const Bestshop = props =>{

    const entradas =  [
        {img: Primero,
         titulo: "AA",
         fecha: "Enero 30, 2020",
         cont: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan faucibus sapien. Donec sollicitudin arcu dolor, et porta felis blandit ac. Vestibulum rhoncus ex et mi interdum lobortis. Vivamus convallis, quam vel lacinia eleifend, velit enim tincidunt leo, sed semper magna erat ut est. Phasellus non sem sit amet ipsum tincidunt commodo eu nec nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."

        },
    {
        img: Segundo,
        titulo: "ABC",
        fecha: "Enero 29, 2020",
        cont: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan faucibus sapien. Donec sollicitudin arcu dolor, et porta felis blandit ac. Vestibulum rhoncus ex et mi interdum lobortis. Vivamus convallis, quam vel lacinia eleifend, velit enim tincidunt leo, sed semper magna erat ut est. Phasellus non sem sit amet ipsum tincidunt commodo eu nec nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    {
     img: Tercero,
     titulo: "zzz",
         fecha: "Enero 30, 2020",
         cont: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan faucibus sapien. Donec sollicitudin arcu dolor, et porta felis blandit ac. Vestibulum rhoncus ex et mi interdum lobortis. Vivamus convallis, quam vel lacinia eleifend, velit enim tincidunt leo, sed semper magna erat ut est. Phasellus non sem sit amet ipsum tincidunt commodo eu nec nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}];

    return(
<section className="bestshop-contenedor" style={{backgroundImage: `url(${Fondo})`}}>

</section>
    );
} 

export default Blogzone;