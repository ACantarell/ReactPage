import React from 'react'
import {ContainerCards, CardInfo} from './styled'
import {ButtonStyled} from '../../components/button/Styled'

export const Product = ({title, img, price}) => {

  return (
            <ContainerCards >
                <div>
                  <img src={img} alt="" />
                </div>
                <CardInfo>
                  <h3>{title}</h3>
                  <p>${price}</p>
                </CardInfo>
                <ButtonStyled>Comprar</ButtonStyled>
            </ContainerCards> 
  )
}
