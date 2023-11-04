import React from 'react'
// import { Product } from '../Product'
import { ContainerMapCard } from './StyledMap'
import { Data } from '../../../data/Products'
import  ExpandableCard  from '../../Card/Card'



export const ProductsMaps = () => {
  return (

        <ContainerMapCard>
        {
          Data.map(product => <ExpandableCard key={product.id} {...product}/>)            
        }
        </ContainerMapCard>
      

  )
}
