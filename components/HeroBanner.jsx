import React from 'react'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <img src="" alt="headpones" className='hero-banner-image' />
        <div>
          <a href="/product/ID">
            <button type='button'>BUTTON TEXT</button>
          </a>
          <div className='desc'>
          <h5>Description</h5>
          <p>Description</p>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default HeroBanner
