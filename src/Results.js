import './Results.css';
import React from 'react';
import Card from './Card'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// const estilo ={width: "100%", borderTopRightRadius: '20px'};
function Results({url,nombre,precio}){
    return(
        <Router>
            <div className="results" id="results">
                <Card
                    url='Fondo1.jpg' nombre="Gym 1" precio="35.98"
                />
                <Card
                    url='Fondo2.jpg' nombre="Gym 2" precio="15.98"
                />
                <Card
                    url='Fondo3.jpg' nombre="Gym 3" precio="4.98"
                /> 
                <Card
                    url='Fondo1.jpg' nombre="Gym 1" precio="35.98"
                />
            </div>
        </Router>
        
    );
}
export default Results;