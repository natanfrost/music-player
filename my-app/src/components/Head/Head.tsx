import './style.css';
import { BsGear } from "react-icons/bs";
import { MdReplay } from "react-icons/md";
import { IconContext } from 'react-icons/lib';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';

export default function Head() {
    const [welcomeMessage, setWelcomeMessage] = useState('');

    const history = useHistory();

    const handleReload = () => {
        history.go(0);
    }

    const getWelcomeMessage = () => {
        const now = new Date().getHours();

        if (now > 4 && now <= 12) {
            setWelcomeMessage('Good morning!')
        } else if (now > 12 && now <= 18) {
            setWelcomeMessage('Good afternoom!')
        } else {
            setWelcomeMessage('Good night!')
        }
    }

    useEffect(() => {
        getWelcomeMessage();
    })

    return(
        <div className='container'>
            <h2>{welcomeMessage}</h2>
            <IconContext.Provider value={{ size: '25px', style: { marginRight: '10px' } }}>
                <MdReplay onClick={() => handleReload()} cursor={'pointer'}/>
                <NavLink to='/configuration'>
                    <BsGear />
                </NavLink>
            </IconContext.Provider>
        </div>
    )
}