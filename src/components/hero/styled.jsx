import styled from "styled-components";

export const HeroContainer = styled.div`
height: 500px;
max-width: 1300px;
margin: 0 auto;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
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
:nth-child(3){
  
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
  padding: 2rem 0; 
  object-fit: cover;
}
`