import React from 'react';
import './style.css';
import { FiSearch } from 'react-icons/fi/'
import { IconContext } from 'react-icons/lib';
import GenreCard from '../LayoutComponents/GenreCard/GenreCard';

export default function Search() {
    return (
        <div className="Search">
            <div className="search-input">
                <h2>Search</h2>
                <IconContext.Provider value={{ size: '30px', style: {} }}>
                    <FiSearch className="icon" />
                </IconContext.Provider>
                <div className="input-container">
                    <input type="text" name="search" id="search" placeholder="Artists, music or podcasts" />
                </div>
            </div>

            <span>Your favorite genres</span>
            <div className="genre-container">
                <GenreCard description="Rock" imgPath="" color="red" />
                <GenreCard description="Pop" imgPath="" color="purple" />
            </div>

            <span>Navigate through all sections</span>
            <div className="genre-container">
                <GenreCard description="Podcasts" imgPath="" color="green" />
                <GenreCard description="New" imgPath="" color="brown" />
            </div>
            <div className="genre-container">
                <GenreCard description="Parades" imgPath="" color="#1b8f98" />
                <GenreCard description="Shows" imgPath="" color="#353030" />
            </div>
            <div className="genre-container">
                <GenreCard description="Funk" imgPath="" color="75750a" />
                <GenreCard description="Brasil" imgPath="" color="#064418" />
            </div>
            <div className="genre-container">
                <GenreCard description="Just for you" imgPath="" color="#1b8f98" />
                <GenreCard description="In home" imgPath="" color="#060f44" />
            </div>
        </div>
    )
}