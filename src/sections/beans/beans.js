import React from 'react';
import Granos from '../../imgs/gcacao.jpg';
import Sublink from '../../components/sublink/sublink';
import './beans.scss'

const Beans = () =>{
    return(
<section className="beans-contenedor">
<div className="beans-subcontenedor"><h1>GRANOS DE CACAO</h1><span>Cupcake ipsum dolor sit amet sesame snaps dessert. Toffee gummies jelly croissant icing soufflé lollipop. Cookie tart ice cream chocolate apple pie cake sweet roll. Dessert tootsie roll jelly beans pastry oat cake candy canes icing. Sugar plum gingerbread chocolate bar. Cake biscuit chocolate bar brownie marshmallow jelly beans marshmallow gummies. Marzipan brownie oat cake sesame snaps sugar plum chocolate muffin jelly. Donut donut jujubes. Croissant jujubes sugar plum. Sweet roll gummi bears donut sugar plum bonbon.
</span>
<Sublink link="https://i.pinimg.com/originals/bc/07/6a/bc076ae91a0f18ed321c48a5d7c911ca.gif" txt="H E L L O!"></Sublink>
</div>
<img src={Granos} alt="Granos de cacao" height="42" width="42">
    </img>
</section>
    );
} 

export default Beans;