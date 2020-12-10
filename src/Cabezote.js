import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Cabezote(){
    return(
        <nav className="header" id="header">
            <Link to="">
                <img className="logoHeader" id="logoHeader" alt="logo" src="/trainbook.jpg"></img>
            </Link>
            <div className="language" id="language" alt="language">
                <ul>
                    <li><a href="/home">EN</a></li>
                    <li><a href="/eshome">ES</a></li>
                </ul>
            </div>
            <div className="header_search" id="header_search">
                <input className="headerSearchInput" type="text" id="headerSearchInput" placeholder="Search"/>
                {/* <SearchIcon className="searchIcon"/> */}
            </div>
            <div className="menu" id="menu" alt="menu">
                <ul>
                    <li><a href="/">Secciones</a></li>
                    <li><a href="/">Nosotros</a></li>
                    <li><a href="/">Testimonios</a></li>
                    <li><a href="/">Descargas</a></li>
                    <li><a href="/">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
}
  
  export default Cabezote;