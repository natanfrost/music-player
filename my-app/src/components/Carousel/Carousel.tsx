import React from 'react';
import './style.css';

export default function Carousel() {
    return(
        <div className="Caroulsel">
            <h2>New episodes</h2>
            <div className="row">
                <img className="carousel" src="img_snowtops.jpg"/>
                <img className="carousel" src="img_lights.jpg"/>
                <img className="carousel" src="img_mountains.jpg"/>
                <img className="carousel" src="img_forest.jpg"/>
            </div>
        </div>
    )
}