import React from 'react';
import './style.css';
import { MdHome } from 'react-icons/md/'
import { FiSearch } from 'react-icons/fi/'
import { VscLibrary } from 'react-icons/vsc'
import { FaSpotify } from 'react-icons/fa'

export default function Footer() {
    return(
        <div className="Footer">
            <MdHome />
            <FiSearch />
            <VscLibrary />
            <FaSpotify />
        </div>
    )
}