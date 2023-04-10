import React from 'react'

const HeroSection = ({children}) => {
  return (
    <div>
      <h3 className='text-3xl text-center'>{children}</h3>
    </div>
  )
}

export default HeroSection