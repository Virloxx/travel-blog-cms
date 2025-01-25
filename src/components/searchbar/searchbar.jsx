'use client'

import React, { useEffect, useState } from 'react';
import { HiOutlineSearch } from "react-icons/hi";
import { useRouter } from 'next/navigation';

const Searchbar = () => {
    const [activeSearch, setActiveSearch] = useState([])
    const [posts, setPosts] = useState([])
    const router = useRouter()

    useEffect(() => {
        async function getPosts() {
            const response = await fetch('/api/post_get')
            const json = await response.json()
            setPosts(json)
        }
        getPosts()
    }, [])

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        if (query === '') {
            setActiveSearch([]);
            return false;
        }
    
        const filteredPosts = posts
            .filter((post) => post.title.toLowerCase().includes(query))
            .map((post) => ({ id: post.id, title: post.title })).slice(0,3);
    
        setActiveSearch(filteredPosts);
        console.log(activeSearch)
    };

    const handleResultClick = (id) => {
        router.push(`/posts/${id}`)
    };

    function handleClick() {
        router.push("/posts")
    }

    return (
        <form className='searchbar-container'>
            <div className="searchbar-wrapper">
                <input type="search" placeholder='Type Here' className='search-input' onChange={(e) => handleSearch(e)}/>
                <button onClick={() => handleClick()} className='search-button'>
                    <HiOutlineSearch />
                </button>
            </div>

            {
                activeSearch.length > 0 && (
                    <div className="active-search">
                        {
                            activeSearch.map(post => (
                                <a 
                                    key={post.id} 
                                    className="search-result"
                                    onClick={() => handleResultClick(post.id)}
                                >
                                    {post.title}
                                </a>
                            ))
                        }
                    </div>
                )
            }
        </form>
    );
};

export default Searchbar;
