import React from "react";
import { FaHeart } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IconContext } from "react-icons/lib";
import './style.css';

interface SongDetail {
    artist: string;
    songName: string;
    coverARt: string;
    favorite: boolean;
}

export default function Song(props: SongDetail) {
    return (
        <div className="Song">
            <div className="cover-art" style={{backgroundColor: props.coverARt }}>
                <img src="" alt="" />
            </div>

            <div className="artist-info">
                <div>
                    <span> {props.songName} </span>
                </div>
                <div>
                    <span>{props.artist}</span>
                </div>
            </div>

            <div className={props.favorite ? "" : "hide"} style={{width:'10%'}}>
                <IconContext.Provider value={{ size: '20px', style: { color: 'green', marginLeft: '10px' } }}>
                    <FaHeart />
                </IconContext.Provider>
            </div>
            <div style={{width:'10%'}}>
                <IconContext.Provider value={{ size: '20px', style: { marginLeft: '15px' } }}>
                    <HiOutlineDotsVertical />
                </IconContext.Provider>
            </div>
        </div>
    )
}