import './Banner.css';
import React from 'react';

function Fondo(){
    return(
        <div class="button-container">
            <img src="fondo2.jpg" width="100%"  alt="film title"/>
            <h1>TRAINBOOK</h1>
            <h2>Book your fit lifestyle sessions online</h2>
            <a href="/booking" alt="Start booking" id="startBooking">RESERVAR</a>
            <a href="https://play.google.com/store?hl=es_419&gl=US" alt="Download app" id="downloadApp">DESCARGAR APP</a>
        </div>
    );  
}
  
  export default Fondo;