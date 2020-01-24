import React from 'react';
import './cartatipos.scss';

const Cartatipos = props =>{
    return(
<article className="tipos-carta"><div><img className="tipos-img" src={props.Imglate}/></div>
<div><h1>{props.titulo}</h1>
<span>{props.descri}</span></div></article>
    );
} 

export default Cartatipos;