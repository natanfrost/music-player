import React from 'react';
import './style.css';
import a7x from '../../img/a7x.jpg';
import img2 from '../../img/soundgarden.jpg';
import img3 from '../../img/sp.png';
import img4 from '../../img/racionais.jpg';
import img5 from '../../img/blink.jpg';
import img6 from '../../img/rhcp.jpg';
import { useHistory } from 'react-router';

//TODO #2 need to add a space between cover-items for better view @natanfrost

interface RecommendedList {
    coverPath: string;
    alt: string
}

function Cover(props: RecommendedList) {
    
    const history = useHistory();

    function handleClick() {
        history.push('/playlist');
    }

    return (
        <div className="cover-container">
            <div onClick={() => handleClick()} className="cover-item">
                <img src={img6} alt={props.alt} />
                <span>Musicas</span>
            </div>
            <div onClick={() => handleClick()} className="cover-item">
                <img src={a7x} alt={props.alt} />
                <span>Rock Classics</span>
            </div>
            <div onClick={() => handleClick()} className="cover-item">
                <img src={img2} alt={props.alt} />
                <span>Daily Mix 1</span>
            </div>
            <div onClick={() => handleClick()} className="cover-item">
                <img src={img3} alt={props.alt} />
                <span>60s Rock</span>
            </div>
            <div onClick={() => handleClick()} className="cover-item">
                <img src={img4} alt={props.alt} />
                <span>Descobertas</span>
            </div>
            <div onClick={() => handleClick()} className="cover-item">
                <img src={img5} alt={props.alt} />
                <span>Explore</span>
            </div>

        </div>
    );
}

export default Cover;
