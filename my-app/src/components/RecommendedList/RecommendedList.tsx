import React from 'react';
import './style.css';

interface RecommendedList {
    coverPath: string;
    alt: string
}

function Cover(props:RecommendedList) {    

  return (
    <div className="cover-container">        
        <div className="cover-item"> 
            <img src={props.coverPath} alt={props.alt} />       
            <span>Musicas Curtidas</span>
        </div>
        <div className="cover-item"> 
            <img src={props.coverPath} alt={props.alt} />    
            <span>Rock Classics</span>
        </div>
        <div className="cover-item"> 
            <img src={props.coverPath} alt={props.alt} />        
            <span>Daily Mix 1</span>            
        </div>
        <div className="cover-item"> 
            <img src={props.coverPath} alt={props.alt} />        
            <span>60s Rock Anthems</span>
        </div>
        <div className="cover-item"> 
            <img src={props.coverPath} alt={props.alt} />        
            <span>Descobertas</span>
        </div>
        <div className="cover-item"> 
            <img src={props.coverPath} alt={props.alt} />     
            <span>Explore</span>
        </div>

    </div>
  );
}

export default Cover;
