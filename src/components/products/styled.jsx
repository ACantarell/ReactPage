import {styled} from "styled-components";

export const ContainerCards = styled.div`
    padding: 1rem;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    border: 1px solid #912d2d;
    border-radius: 1.2rem;
    box-shadow: 0px 13px 8px -1px rgba(95,52,186,0.22);
    -webkit-box-shadow: 0px 13px 8px -1px rgba(95,52,186,0.22);
    -moz-box-shadow: 0px 13px 8px -1px rgba(95,52,186,0.22);

  img{
    width: 198px;
    height: 14rem;
    border-radius: 1.2rem;
    object-fit: cover;
  }

`

export const CardInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 5rem;
    padding: 1rem 0;
`