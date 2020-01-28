import React from 'react';
import './bestbean.scss';

const Bestbean = props =>{
    return(
<article><div><img className="img-iconos" src={props.img}/></div>
<div><h2 className="iconos-txt">{props.titulo}</h2>
</div></article>
    );
} 

export default Bestbean;