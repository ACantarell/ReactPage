import styled from "styled-components";

export const NavContainer = styled.nav`

display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 50px;

  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
  
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
    @media (min-width: 1024px){
      .active{
        display: none;
      }
    }
    
  }

  .burguer{
    @media(min-width: 768px){
        display: none;
        z-index: 1;

    }
    
    .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
   @media (min-width: 768px){
      &.links.active{
        display: none;
      }
    }

  @media (min-width: 1024px){
      &.active{
        display: none;
      }
    }

  }
`

export const BgDiv = styled.div`
  
  background-color: #181717;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 100%;
  transition: all .6s ease ;
  
  &.active{
    opacity: 100%;
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media(min-width: 768px){
    display: none;
     background-color: #181717;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 100%;
  transition: all .6s ease ;
  
  &.active{
    opacity: 100%;
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
 
    
  }
`

