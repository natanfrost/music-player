import React from 'react';
import './style.css'
import { FaHeart, FaSpotify } from 'react-icons/fa';
import { HiOutlineDotsVertical } from 'react-icons/hi/'
import { AiFillPlayCircle } from 'react-icons/ai/'
import { BsArrowLeftShort } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { useHistory } from 'react-router';

export default function Playlist() {
    const history = useHistory();

    function handleClick() {
        history.push('/music-player')
    }

    return (
        <div className="Playlist">
            <div onClick={() => handleClick()} className="back-to">
                <IconContext.Provider value={{ size: '30px', style: { color: 'white' } }}>
                    <BsArrowLeftShort />
                </IconContext.Provider>
            </div>
            <div className="top">
                <div className="playlist-img">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="playlist-description">
                <span>Rock legends and epic songs that continue to inspire generations.</span>
            </div>
            <div className="playlist-details">
                <div className="playlist-spotify">
                    <IconContext.Provider value={{ size: '20px', style: { color: 'green', marginRight: '10px' } }}>
                        <FaSpotify />
                    </IconContext.Provider>
                </div>
                <div>
                    <span>Spotify</span>
                </div>
            </div>
            <div className="playlist-likes-time">
                <span>9.144.038 curtidas 🞄 4h 52min</span>
            </div>
            <div className="row">
                <div style={{ flex: '10%' }}>
                    <IconContext.Provider value={{ size: '20px', style: { color: 'green', marginRight: '10px' } }}>
                        <FaHeart />
                    </IconContext.Provider>
                </div>
                <div style={{ flex: '80%' }}>
                    <HiOutlineDotsVertical />
                </div>

            </div>
            <div className="play-btn">
                <IconContext.Provider value={{ size: '60px', style: { color: 'green' } }}>
                    <AiFillPlayCircle />
                </IconContext.Provider>
            </div>
        </div>
    )
}