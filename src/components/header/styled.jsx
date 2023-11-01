import {styled} from "styled-components";


export const ContainerNavbar = styled.div`
width: 100%;
max-width: 1300px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: #ffffff;
box-shadow: 0px 13px 8px -1px rgba(95,52,186,0.22);
-webkit-box-shadow: 0px 13px 8px -1px rgba(95,52,186,0.22);
-moz-box-shadow: 0px 13px 8px -1px rgba(95,52,186,0.22);
@media (max-width: 320px){ 
max-width: 320px;
justify-content: center;
margin: 1rem;
}

`
export const NavbarImg  = styled.img`
width: 100px;
margin: 1rem;
@media (max-width: 320px){ 
  display: none;
}
`

export const NavbarLinks = styled.ul`
display: flex;
align-items: center;
justify-content: center;
margin-right: 2rem;
:first-child{
  padding: 0.7rem;
  border-radius: 10px;
  color: #912d2d;
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
@media (max-width: 320px){ 
  width: 100%;
}
`
