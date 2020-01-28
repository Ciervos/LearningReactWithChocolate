import React from 'react';
import './sublink.scss';

const Sublink = props =>{
    return(
<div><a className="link"href={props.link}>{props.txt}</a></div>
    );
} 

export default Sublink;