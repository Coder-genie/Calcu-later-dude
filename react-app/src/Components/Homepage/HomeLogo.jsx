import React from "react";
import './HomepageStyle.css';
import logo from '../../images/logo_image.png';

function HomeLogo() {
    return <img src={logo} className="image-fluid logo-center" alt="logo"></img>;
}

export default HomeLogo;