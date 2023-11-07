import styled from "styled-components";

export const CategoryContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
gap: 1rem;
width: 100%;
max-width: 2000nx;
padding: 1rem 0;
background-color: #bdb5bb53;
@media (max-width: 320px){
}
`
export const ContainerButtons = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
width: 100%;
max-width: 1300px;
margin: 0 auto;
@media (max-width: 320px){
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-content: center;
  justify-content: center;
  gap: 1rem;
}
@media (max-width: 640px){
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-content: center;
  justify-content: center;
}
@media (max-width: 768px){
  width: 100%;
  margin-bottom: 4rem;
  align-content: center;
  justify-content: center;
} 
`