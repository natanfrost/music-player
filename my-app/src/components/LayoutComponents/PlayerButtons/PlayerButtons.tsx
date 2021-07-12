import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import './style.css';
import { AiFillPlayCircle } from "react-icons/ai";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons/lib";

export default function PlayerButtons() {
    return (
        <div className="PlayerButtons">
            <div className="seekbar">
                <div>
                    <input type="range" name="tmr-song" id="tmr-song" min="1" max="100" />
                </div>
                <div className="song-timers">
                    <div>
                        <span>0:00</span>
                    </div>
                    <div>
                        <span>3:51</span>
                    </div>
                </div>
            </div>
            <div className="actions">
                <div>
                    <IconContext.Provider value={{ size: '20px', style: {} }}>
                        <FaRegHeart />
                    </IconContext.Provider>
                </div>
                <div>
                    <IconContext.Provider value={{ size: '60px', style: {} }}>
                        <BiSkipPrevious />
                    </IconContext.Provider>
                </div>
                <div>
                    <IconContext.Provider value={{ size: '60px', style: {} }}>
                        <AiFillPlayCircle />
                    </IconContext.Provider>
                </div>
                <div>
                    <IconContext.Provider value={{ size: '60px', style: {} }}>
                        <BiSkipNext />
                    </IconContext.Provider>
                </div>
                <div>
                    <IconContext.Provider value={{ size: '20px', style: {} }}>
                        <IoIosRemoveCircleOutline />
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}