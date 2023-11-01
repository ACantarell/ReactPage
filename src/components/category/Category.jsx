import React from 'react'
import {CategoryContainer} from './Styled'
import {Button} from '../button/Button'

export const Category = () => {
  return (
    <CategoryContainer>
        <h2>Categorias</h2>
          <div>
            <Button>Tigre</Button>
            <button>León</button>
            <button>Oso</button>
            <button>Aguila</button>
            <button>Mono</button>
          </div>
    </CategoryContainer>
  )
}
