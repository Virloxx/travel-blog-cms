import React from 'react'

function Banner() {
  return (
    <section id="banner">
        <div className="inner">
            <img
              className="banner author-photo" 
              src="https://st2.depositphotos.com/1011382/7489/i/450/depositphotos_74896235-stock-photo-backpacker-man-taking-selfie-on.jpg" 
              alt="Author photo" 
            />
            <div className="banner text-area">
              <h2>Travel Blog</h2>
              <p>Banner subtitle</p>
            </div>
        </div>
	</section>
  )
}

export default Banner