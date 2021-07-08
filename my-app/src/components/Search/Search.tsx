import React from 'react';
import './style.css';
import { FiSearch } from 'react-icons/fi/'

export default function Search() {
    return(
        <div className="Search">
            <h2>Search</h2>
            <FiSearch />
            <input type="text" name="search" id="search" placeholder="Artists, music or podcasts"/>            
            <span>Your favorite genres</span>
            <div className="genre-container">
                <div className="genre-card">
                    <img src="" alt="" />
                </div>
                <div className="genre-card">
                    <img src="" alt="" />
                </div>
            </div>

            <span>Navigate through all sections</span>
            <div className="genre-container">
                <div className="genre-card">
                    <img src="" alt="" />
                </div>
                <div className="genre-card">
                    <img src="" alt="" />
                </div>                               
            </div>
            <div className="genre-container">
                <div className="genre-card">
                    <img src="" alt="" />
                </div>
                <div className="genre-card">
                    <img src="" alt="" />
                </div>                               
            </div>
            <div className="genre-container">
                <div className="genre-card">
                    <img src="" alt="" />
                </div>
                <div className="genre-card">
                    <img src="" alt="" />
                </div>                               
            </div>
            <div className="genre-container">
                <div className="genre-card">
                    <img src="" alt="" />
                </div>
                <div className="genre-card">
                    <img src="" alt="" />
                </div>                               
            </div>
        </div>
    )
}