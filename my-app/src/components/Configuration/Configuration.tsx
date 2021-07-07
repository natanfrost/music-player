import React from 'react';
import './style.css';
import profile from '../../img/profile.gif';
import { IoIosArrowForward } from "react-icons/io";


export default function Configuration() {
    return (
        <div className="Configuration">
            <div className="header">
                <h4>Configuration</h4>
            </div>

            <div className="premium">
                <h3>Free account</h3>
                <button>Become Premium</button>
            </div>

            <div className="container">
            
                <div className="profile">
                    <img src={profile} alt="" />
                    <div className="profile-detail">
                        <h2>Your Name</h2>
                        <span>See profile</span>
                    </div>
                    <div className="profile-icon">
                        <IoIosArrowForward />
                    </div>
                </div>


                <h5>Account</h5>
                <h5>E-mail</h5>
                <span>email@email.com</span>
                <h5>Data economy</h5>
                <h5>Audio Quality</h5>                
                <div className="toggle">
                    <div>
                        <span>Sets your audio quality to low</span>
                    </div>
                    <div>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label></div>
                </div>
            </div>
        </div>
    )
}