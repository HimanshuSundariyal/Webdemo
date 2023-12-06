import React from 'react';

const Link  = ({link, label}) =>{
    return(
        <a className="nav-link" href ={link}>{label}</a>
    );
}

export default Link