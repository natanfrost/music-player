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
                    <div className="profile-img">
                        <img src={profile} alt="" />
                    </div>
                    <div className="profile-detail">
                        <h3>Your Name</h3>
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
                <h5>Audio quality</h5>
                <div className="toggle">
                    <div>
                        <span>Sets your audio quality to low</span>
                    </div>
                    <div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label></div>
                </div>
            </div>
        </div>
    )
}