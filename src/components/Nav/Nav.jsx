import React from 'react';
import './Nav.css';
import logo from './../../assets/Instantype.png'
const Nav= ()=>{
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="instantype-logo" src={logo} alt="logo"/>
                <p className="instantype-logo-text">INSTANTYPE</p>
            </div>
        </div>
    );
}


export default Nav;