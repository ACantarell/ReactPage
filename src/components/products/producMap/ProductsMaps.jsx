import React from 'react'
import { Product } from '../Product'
import { ContainerMapCard } from './StyledMap'
import { Data } from '../../../data/Products'



export const ProductsMaps = () => {
  return (

        <ContainerMapCard>
        {
          Data.map(product => <Product key={product.id} {...product}/>)            
        }
        </ContainerMapCard>
      

  )
}
