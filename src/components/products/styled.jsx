import {styled} from "styled-components";

export const ProductsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 1rem;
width: 100%;
max-width: 1300px;
margin: 0 auto;
`

export const ProductCards = styled.div`
margin: 2rem 0; 
border: 1px solid #912d2d;
width: 20%;
height: 370px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
border-radius: 1.2rem;
background-color: #ad5e5e;
img{
  width: 200px;
  height: 200px;
  border-radius: 1.2rem;
  object-fit: cover;
}
h2{
  font-weight: bold;
  font-size: 2rem;
}
p{
  font-size: 1rem;
}
`
