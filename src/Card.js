import './Card.css';
import React from 'react';
const estilo ={width: "100%", height: '200px', borderTopRightRadius: '20px'};
function Card({url,nombre,precio}){
    return(
        
        <div className="card">
            <img src={url} alt="Opción" style={estilo}></img>
            <h1>{nombre}</h1>
            <p class="price">${precio}</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
        </div>
    );
}
  
export default Card;