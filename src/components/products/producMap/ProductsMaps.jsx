import React from 'react'
import { ProductsData } from '../../../data/products'
import { Product } from '../Product'
import { ContainerMapCard } from './StyledMap'



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
