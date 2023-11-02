import React from 'react'
import {CategoryContainer, ContainerButtons} from './Styled'
import {ButtonStyled} from '../button/Styled'

export const Category = () => {
  return (
    <CategoryContainer>
        <h2>Categorias</h2>
          <ContainerButtons>
            <ButtonStyled>Tigre</ButtonStyled>
            <ButtonStyled>León</ButtonStyled>
            <ButtonStyled>Oso</ButtonStyled>
            <ButtonStyled>Aguila</ButtonStyled>
            <ButtonStyled>Mono</ButtonStyled>
          </ContainerButtons>
    </CategoryContainer>
  )
}
