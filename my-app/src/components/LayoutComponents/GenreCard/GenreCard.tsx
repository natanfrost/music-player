import React from 'react';
import { useHistory } from 'react-router';
import './style.css';

interface GenreCardDetails {
    description: string;
    imgPath: string;
    color: string;
}

export default function GenreCard(props: GenreCardDetails) {

    const history = useHistory();

    function handleGenreClick() {
        history.push('/playlist');        
    }

    return (
        <div onClick={() => handleGenreClick()} className="GenreCard" style={{backgroundColor: props.color}}>
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