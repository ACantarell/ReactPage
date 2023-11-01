import React from 'react'
import { FooterContainer, FooterImg, FooterSocial, FooterContact } from "./styled";
import { FaFacebook, FaSquareTwitter, FaSquareWhatsapp, FaSquareInstagram } from "react-icons/fa6";


export const Footer = () => {
  return (
    <FooterContainer >
      <hr />
      <div>
        <FooterImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx7rdzBNNJBTx6ah09DD7MMoNbrM167ysIOQ&usqp=CAU" alt="" />
      </div>
      <div>
        <FooterSocial>
          <li><a href=""> <FaFacebook/> </a></li>
          <li><a href=""> <FaSquareTwitter/> </a></li>
          <li><a href=""> <FaSquareWhatsapp/> </a></li>
          <li><a href=""> <FaSquareInstagram/> </a></li>
        </FooterSocial>
      </div>
      <div>
        <FooterContact>
          <li><a href="">Contacto</a></li>
          <li><a href="">Trabaja con nosotros</a></li>
          <li><a href="">Encontranos</a></li>
          <li><a href="">Soporte</a></li>
        </FooterContact>
      </div>
    </FooterContainer>
  )
}
