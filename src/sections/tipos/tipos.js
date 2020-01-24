import React from 'react';
import './tipos.scss';
import Fondo from '../../imgs/table.jpg';

const Tipos = () =>{
    return(
<section className="tipos-contenedor" style={{backgroundImage: `url(${Fondo})`}}>
 <div>aca el textin</div>
 <div>aca los componentes >:3</div>
</section>
    );
} 

export default Tipos;