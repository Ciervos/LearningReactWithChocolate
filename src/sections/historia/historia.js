import React from 'react';
import Fondo from '../../imgs/chocobombones.jpg';
import './historia.scss'

const Historia = () =>{
    return(
<section className="historia-contenedor" style={{backgroundImage: `url(${Fondo})`}}>
<div className="historia-subcontenedor"><h1>Our Story</h1><span>Cupcake ipsum dolor sit amet sesame snaps dessert. Toffee gummies jelly croissant icing soufflé lollipop. Cookie tart ice cream chocolate apple pie cake sweet roll. Dessert tootsie roll jelly beans pastry oat cake candy canes icing. Sugar plum gingerbread chocolate bar. Cake biscuit chocolate bar brownie marshmallow jelly beans marshmallow gummies. Marzipan brownie oat cake sesame snaps sugar plum chocolate muffin jelly. Donut donut jujubes. Croissant jujubes sugar plum. Sweet roll gummi bears donut sugar plum bonbon.
</span></div>
</section>
    );
} 

export default Historia;