import React from 'react';
import Fondo from '../../imgs/whitechoco.jpg';
import Bloquetxt from '../../components/bloquetxt/bloquetxt'
import Sublink from '../../components/sublink/sublink'
import './grandcru.scss'

const Grand = () =>{
    return(
<section className="grand-contenedor" style={{backgroundImage: `url(${Fondo})`}}>
<Bloquetxt className="Bloquetxt" titu="Grand Cru" txt="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."></Bloquetxt>

<Sublink link="http://www.google.com" txt="H E L L O X2"></Sublink>
</section>
    );
} 

export default Grand;