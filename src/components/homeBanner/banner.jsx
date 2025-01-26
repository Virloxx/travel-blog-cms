"use client"
import {React, useEffect, useState} from 'react'

function Banner() {
  const [miscInfo, setMiscInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/misc_info');
      const data = await response.json();
      setMiscInfo(data);
    };

    fetchData();
  }, []);

  return (
    <section id="banner">
        <div className="inner">
            <img
              className="banner author-photo" 
              src="https://st2.depositphotos.com/1011382/7489/i/450/depositphotos_74896235-stock-photo-backpacker-man-taking-selfie-on.jpg" 
              alt="Author photo" 
            />
            <div className="banner text-area">
            {miscInfo.length > 2 && miscInfo[1] ? (
                <h2>{miscInfo[1].value}</h2>
              ) : (
                <h2>Loading...</h2>
              )}
              {miscInfo.length > 2 && miscInfo[2] ? (
                <p>{miscInfo[2].value}</p>
              ) : (
                <p>Loading...</p>
              )}
            </div>
        </div>
	</section>
  )
}

export default Banner