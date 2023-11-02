import styled from "styled-components";

export const HeroContainer = styled.div`
height: 500px;
max-width: 1300px;
margin: 0 auto;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;

@media (max-width: 320px){
  flex-direction: column;
  justify-content: center;  
  height: 20rem;
}
@media (max-width: 640px){
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media (max-width: 768px){
  margin-bottom: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media (max-width: 1024px){
  
}
`

export const HeroInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #912d2d;
width: 50%;
:first-child{
  width: 80%;
  font-weight: bold;
  font-size: 9.5rem;
}
:nth-child(2) {
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 3.5rem;
  text-align: center;
  width: 80%;
}
@media (max-width: 320px){
  text-align: center;
  width: 100%;
  gap: 0.5rem;


  :first-child{
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
}
@media (max-width: 640px){
  width: 100%;
  gap: 0.5rem;

  :first-child{
  margin-top: 3rem;  
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
}
@media (max-width: 768px){
   width: 100%;
  gap:1rem;

  :first-child{
  margin-top: 3rem;  
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
}
`

export const HeroImg = styled.div`
width: 40%;
height: 700px;
display: flex;
justify-content: center;
align-items: center;

:first-child{
  width: 45%;
  border-radius: 40%;
  padding: 1rem 0; 
  object-fit: cover;
}
@media (max-width: 320px){
  display: none;
}
@media (max-width: 640px){
  width: 50%;
}
@media (max-width: 768px){
  width: 50%;
}
`