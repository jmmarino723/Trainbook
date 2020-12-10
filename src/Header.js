import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
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
                    <li><a href="/">Sections</a></li>
                    <li><a href="/">About us</a></li>
                    <li><a href="/">Testimonials</a></li>
                    <li><a href="/">Downloads</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
  
  export default Header;