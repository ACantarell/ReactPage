import React, { useState } from 'react'
import { BgDiv, NavContainer } from './styled'
import { BurguerButton } from '../burguerButton/BurguerButton'


export const  Navbar = () => {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <h2>Animal <span>Potection</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">Home</a>
          <a onClick={handleClick} href="#h">Shop</a>
          <a onClick={handleClick} href="#h">About</a>
          <a onClick={handleClick} href="#h">Contact</a>
          <a onClick={handleClick} href="#h">Blog</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

