import React from 'react';
import './style.css';

interface Carousel {
    title: string;
}

//TODO #3 implement functionality - click/hold to slide carousel item @natanfrost

export default function Carousel(props:Carousel) {
    return(
        <div className="Caroulsel">
            <h2>{props.title}</h2>
            <div className="row">
                <img className="carousel" src="img_snowtops.jpg" alt=""/>
                <img className="carousel" src="img_lights.jpg" alt=""/>
                <img className="carousel" src="img_mountains.jpg" alt=""/>
                <img className="carousel" src="img_forest.jpg" alt=""/>
            </div>
        </div>
    )
}