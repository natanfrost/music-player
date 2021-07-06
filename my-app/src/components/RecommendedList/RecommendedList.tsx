import React from 'react';
import './style.css';

//TODO #2 need to add a space between cover-items for better view @natanfrost

interface RecommendedList {
    coverPath: string;
    alt: string
}

function Cover(props:RecommendedList) {    

  return (
    <div className="cover-container">        
        <div className="cover-item"> 
            <img src={props.coverPath} alt={props.alt} />       
            <span>Musicas</span>
        </div>
        <div className="cover-item"> 
            <img src="../assets/img/a7x.jpg" alt={props.alt} />    
            <span>Rock Classics</span>
        </div>
        <div className="cover-item"> 
            <img src="../assets/img/soundgarden.jpg" alt={props.alt} />        
            <span>Daily Mix 1</span>            
        </div>
        <div className="cover-item"> 
            <img src="../assets/img/sp.png" alt={props.alt} />        
            <span>60s Rock</span>
        </div>
        <div className="cover-item"> 
            <img src="../assets/img/racionais.jpg" alt={props.alt} />        
            <span>Descobertas</span>
        </div>
        <div className="cover-item"> 
            <img src="../assets/img/blink.jpg" alt={props.alt} />     
            <span>Explore</span>
        </div>

    </div>
  );
}

export default Cover;
