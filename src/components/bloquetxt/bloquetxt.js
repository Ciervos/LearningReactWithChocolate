import React from 'react';
import './bloquetxt.scss';

const Bloquetxt = props =>{
    return(
<div className="base-contenedor"><h1>{props.titu}</h1><span>{props.txt}
</span></div>
    );
} 

export default Bloquetxt;