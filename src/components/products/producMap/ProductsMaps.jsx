import React from 'react'
import { Product } from '../Product'
import { ContainerMapCard } from './StyledMap'
import { ProductsData } from '../../../data/Products'



export const ProductsMaps = () => {
  return (

      <div>
        <ContainerMapCard>
        {
          ProductsData.map(product => <Product key={product.id} {...product}/>)            
        }
        </ContainerMapCard>
      </div>

  )
}
