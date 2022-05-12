import React from 'react';
import './style.css';
import { BsGear } from "react-icons/bs";
import { MdReplay } from "react-icons/md";
import { IconContext } from 'react-icons/lib';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';

export default function Head() {

    const history = useHistory();

    const handleReload = () => {
        history.go(0);
    }

    return(
        <div className='container'>
            <h2>Good morning!</h2>
            <IconContext.Provider value={{ size: '25px', style: { marginRight: '10px' } }}>
                <MdReplay onClick={() => handleReload()} cursor={'pointer'}/>
                <NavLink to='/configuration'>
                    <BsGear />
                </NavLink>
            </IconContext.Provider>
        </div>
    )
}