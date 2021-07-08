import React, { LinkHTMLAttributes } from 'react';
import './style.css';
import { MdHome } from 'react-icons/md/'
import { FiSearch } from 'react-icons/fi/'
import { VscLibrary } from 'react-icons/vsc'
import { FaSpotify } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import Configuration from '../Configuration/Configuration';

export default function Footer() {
    return (
        <footer className="Footer">
            <NavLink to="/">
                <MdHome className="svg-footer"/>
            </NavLink>
            <FiSearch className="svg-footer" />
            <VscLibrary className="svg-footer" />
            <FaSpotify className="svg-footer" />
        </footer>
    )
}