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
@media (max-width: 320px){
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-content: center;
  justify-content: center;
  gap: 0;
}
@media (max-width: 640px){
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-content: center;
  justify-content: center;
}
@media (max-width: 768px){
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-content: center;
  justify-items: center;
  
}
`

export const ProductCards = styled.div`
margin: 2rem 0; 
border: 1px solid #912d2d;
box-shadow: 0px 13px 8px -1px rgba(95,52,186,0.22);
-webkit-box-shadow: 0px 13px 8px -1px rgba(95,52,186,0.22);
-moz-box-shadow: 0px 13px 8px -1px rgba(95,52,186,0.22);
width: 20%;
height: 400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
@media (max-width: 320px){
  width: 100%;
  margin: 1rem 0;
}
@media (max-width: 640px){
  width: 100%;
  margin: 1rem 0;
}
@media (max-width: 768px){

  width: 80%;
  margin: 1rem 0;
}
`
