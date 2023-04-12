import React from 'react'

const HeroSection = ({children}) => {
  return (
    <div className='hero-section bg-slate-50 mb-5 pb-5'>
      <div className="img-1"><img src="https://i.ibb.co/3pYGLrT/banner.png" alt="banner-img" /></div>
      <div className="img-2"><img src="https://i.ibb.co/d07MJWs/banner-1.png" alt="banner-img1" /></div>
      <h3 className='text-center font-bold text-3xl my-5'>{children}</h3>
    </div>
  )
}

export default HeroSection