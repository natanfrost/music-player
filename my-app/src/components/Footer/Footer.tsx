import React, { LinkHTMLAttributes } from 'react';
import './style.css';
import { MdHome } from 'react-icons/md/'
import { FiSearch } from 'react-icons/fi/'
import { VscLibrary } from 'react-icons/vsc'
import { FaSpotify } from 'react-icons/fa'
import { NavLink, BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Configuration from '../Configuration/Configuration';

export default function Footer() {
    return (
        <footer className="Footer">
            <MdHome className="svg"/>
            <FiSearch className="svg" />
            <VscLibrary className="svg" />
            <FaSpotify className="svg" />
        </footer>
    )
}