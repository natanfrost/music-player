import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import PlayerButtons from "../LayoutComponents/PlayerButtons/PlayerButtons";
import './style.css';

interface PlayerDetail {
    artist: string;
    songName: string;
    coverArt: string;
    playlist: string;
}

export default function Player(props: PlayerDetail) {
    return (
        <div className="Player">
            <div className="player-header">
                <div>
                    <IconContext.Provider value={{ size: '30px', style: {  } }}>
                        <IoIosArrowDown />
                    </IconContext.Provider>
                </div>
                <div>
                    <div>
                        <span>Playing of playlist</span>
                    </div>
                    <div>
                        <span style={{fontWeight: 'bold'}}>Rock Classics</span>
                    </div>
                </div>
                <div>
                    <HiOutlineDotsVertical />
                </div>
            </div>
            <div className="cover-art">
                <img src="" alt="" />
            </div>

            <div className="song-detail">
                <div> 
                    <span style={{fontWeight: 'bold'}}>God Hates Us</span>
                </div>
                <div>
                    <span style={{fontSize: '0.9em'}}>Avenged Sevenfold</span>
                </div>
            </div>
            <PlayerButtons />
        </div>
    )
}