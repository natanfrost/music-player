import React from 'react';
import './style.css';

interface GenreCardDetails {
    description: string;
    imgPath: string;
    color: string;
}

export default function GenreCard(props: GenreCardDetails) {
    return (
        <div className="GenreCard" style={{backgroundColor: props.color}}>
            <div className="description">
                <span>
                    {props.description}
                </span>
            </div>
            <div className="genre-img">
                <img src="" alt="" />
            </div>


        </div>
    )
}