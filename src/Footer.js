import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

function Footer(){
    return(
        <nav className="footer" id="footer">
            <h5><CopyrightIcon/></h5>
            <h4>TRAINBOOK - COLOMBIA - 2020</h4>
            {/* <Link to="">
                <img className="logoHeader" id="logoHeader" alt="logo" src="/trainbook.jpg"></img>
            </Link> */}
            <div className="social" id="social" alt="Social Media">
                <ul>
                    <li><a href="/home"><InstagramIcon/></a></li>
                    <li><a href="/eshome"><FacebookIcon/></a></li>
                    <li><a href="/eshome"><LinkedInIcon/></a></li>
                    <li><a href="/eshome"><AlternateEmailIcon/></a></li>
                </ul>
            </div>
            {/* <div className="header_search" id="header_search">
                <input className="headerSearchInput" type="text" id="headerSearchInput" placeholder="Search"/>
                <SearchIcon className="searchIcon"/>
            </div>
            <div className="menu" id="menu" alt="menu">
                <ul>
                    <li><a href="/">Sections</a></li>
                    <li><a href="/">About us</a></li>
                    <li><a href="/">Testimonials</a></li>
                    <li><a href="/">Downloads</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div> */}
        </nav>
    );
}
  
  export default Footer;