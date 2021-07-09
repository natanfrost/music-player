import React, { useEffect, useState } from 'react';
import './style.css';
import { FaSpotify } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

export default function SplashLoad() {
    const [initial, setInitial] = useState(true);

    function handleSetInitial(initial: boolean) {
        setTimeout(() => {
            setInitial(initial);
        }, 4000);
    }

    useEffect(() => {
        if (initial) {
            handleSetInitial(false);
        }
    })

    return (
        <div className="SplashLoad">
            <div className={`icon-container ${initial ? "" : "splash-animation"}`}>
                <IconContext.Provider value={{ size: '200px', style: { color: 'green' } }}>
                    <FaSpotify />
                </IconContext.Provider>
            </div>
        </div>
    )
}