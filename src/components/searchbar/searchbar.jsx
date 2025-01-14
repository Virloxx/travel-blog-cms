'use client'

import React, { useEffect, useState } from 'react';
import { HiOutlineSearch } from "react-icons/hi";
import { words } from '../../../lib/data'

const Searchbar = () => {

    const [features, setFeatures] = useState([]);
    const [activeSearch, setActiveSearch] = useState([])

    useEffect(() => {
    async function fetchFeatures() {
        const response = await fetch('/api/post');
        const data = await response.json();
        setFeatures(data);
    }
    fetchFeatures();
    }, []);

    const handleSearch = (e) => {
        if(e.target.value == ''){
            setActiveSearch([])
            return false
        }
        const posty = features.map((post, index) => (post.post.title))
        setActiveSearch(posty.filter(w => w.includes(e.target.value)).slice(0,3))
    }

    return (
        <form className='searchbar-container'>
            <div className="searchbar-wrapper">
                <input type="search" placeholder='Type Here' className='search-input' onChange={(e) => handleSearch(e)}/>
                <button className='search-button'>
                    <HiOutlineSearch />
                </button>
            </div>

            {
            activeSearch.length > 0 && (
                <div className="active-search">
                    {
                        activeSearch.map(s => (
                            <span>{s}</span>
                        ))
                    }
                </div>
            )
            } 
        </form>
    );
};

export default Searchbar;
