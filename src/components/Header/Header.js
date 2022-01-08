import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
      <div className='header-brand'>
        <i class='fab fa-dev fa-2x'></i>
      </div>
      <div className='header-links'>
        <div className='link-item'>About Me</div>
        
        
        <div className='link-item'>Projects</div>
        <div className='link-item'>Contact Me</div>
      </div>
    </div>
    )
}

export default Header
