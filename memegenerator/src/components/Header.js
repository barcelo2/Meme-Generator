import React from 'react'
import img from './images/meme.png'


const Header = () => {
    return (
       <header>
         <img src={img} alt="Logo" />
         <p>Meme Generator</p>
       </header>

       
    )
}

export default Header
