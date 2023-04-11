import React from 'react'

const HeroSection = ({children}) => {
  return (
    <div className='hero-section bg-slate-50 mb-5'>
      <h3 className='text-center font-bold text-3xl my-5'>{children}</h3>
    </div>
  )
}

export default HeroSection