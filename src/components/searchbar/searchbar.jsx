'use client'

import React, { useState } from 'react';
import { HiOutlineSearch } from "react-icons/hi";

const Searchbar = () => {

    return (
        <form className='searchbar-container'>
            <div className="searchbar-wrapper">
                <input type="search" placeholder='Type Here' className='search-input'/>
                <button className='search-button'>
                    <HiOutlineSearch />
                </button>
            </div>        
        </form>
    );
};

export default Searchbar;
