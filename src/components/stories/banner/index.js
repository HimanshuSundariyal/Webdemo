import React from 'react';
import banner from '../../../assets/img/banner.jpg'
import './banner.css'

const Banner  = () =>{
    return(
        <div className="main_banner">
             <img className="banner_image" src={banner}/>
        </div>
    )
}

export default Banner;
