import React from 'react';
import './style.css';
import { BsGear } from "react-icons/bs";
import { MdReplay } from "react-icons/md";

export default function Head() {
    return(
        <div className='container'>
            <h2>Good morning!</h2>
            <MdReplay />
            <BsGear />
        </div>
    )
}