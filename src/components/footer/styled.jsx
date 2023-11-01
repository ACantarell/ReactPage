import styled from "styled-components";   

export const FooterContainer = styled.div`
display: flex;
width: 100%;
max-width: 1300px;
margin: 0 auto;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
background-color: #912d2d;
`
export const FooterImg = styled.img`
width: 100px;
border-radius: 50%;

`
export const FooterSocial = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
font-size: 1.5rem;
:last-child{
  color: #ffffff;
  border-radius: 50%;
}
`

export const FooterContact = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 1rem;
font-size: 1rem;
:last-child{
  color: #ffffff;
}
@media (max-width: 320px){
  flex-direction: column;
  margin: 1rem 0;
}
`