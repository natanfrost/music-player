import React from 'react';
import './style.css';

interface Cover {
    coverPath: string;
    alt: string
}

function Cover(props:Cover) {    

  return (
    <div className="cover-container">
        <div className="cover-item"> 
            <img src={props.coverPath} alt={props.alt} />       
            <div className="description">
                <span>Musicas curtidas</span>
            </div>             
        </div>
        <div className="cover-item"> 
            <img src={props.coverPath} alt={props.alt} />    
            <div className="description">
                <span>Rock Classics</span>
            </div>     
        </div>
        <div className="cover-item"> 
            <img src={props.coverPath} alt={props.alt} />        
            <div className="description">
                <span>Daily Mix 1</span>
            </div> 
        </div>
        <div className="cover-item"> 
            <img src={props.coverPath} alt={props.alt} />        
            <div className="description">
                <span>60s Rock Anthems</span>
            </div> 
        </div>
        <div className="cover-item"> 
            <img src={props.coverPath} alt={props.alt} />        
            <div className="description">
                <span>Descobertas da Semana</span>
            </div> 
        </div>
        <div className="cover-item"> 
            <img src={props.coverPath} alt={props.alt} />     
            <div className="description">
                <span>Explore</span>
            </div>    
        </div>

    </div>
  );
}

export default Cover;
