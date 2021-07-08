import React from 'react';
import './style.css';
import { MdHome } from 'react-icons/md/'
import { FiSearch } from 'react-icons/fi/'
import { VscLibrary } from 'react-icons/vsc'
import { FaSpotify } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';

export default function Footer() {
    return (
        <footer className="Footer">
            <IconContext.Provider value={{ size: '35px', style: { marginTop: '10px' } }}>
                <div>
                    <NavLink to="/" >
                        <MdHome />
                    </NavLink>
                </div>
                <div>
                    <FiSearch />
                </div>
                <div>
                    <VscLibrary />
                </div>
                <div>
                    <FaSpotify />
                </div>
            </IconContext.Provider>
        </footer>
    )
}