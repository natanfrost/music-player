import React from 'react';
import './style.css';
import { BsGear } from "react-icons/bs";
import { MdReplay } from "react-icons/md";
import { IconContext } from 'react-icons/lib';

export default function Head() {
    return(
        <div className='container'>
            <h2>Good morning!</h2>
            <IconContext.Provider value={{ size: '25px', style: { marginRight: '10px' } }}>
                <MdReplay />
                <BsGear />
            </IconContext.Provider>
        </div>
    )
}