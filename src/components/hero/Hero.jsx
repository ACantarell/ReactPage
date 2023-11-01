import { HeroContainer, HeroImg, HeroInfo,  } from "./styled"


export const Hero = () => {
  return (
    <HeroContainer>
      <HeroInfo>
        <h1>Welcome </h1>
        <h2>to animal protection</h2>
        <h3>we are here to protect animals</h3>
      </HeroInfo>
      <HeroImg>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwYzQqdOE0YO0GXOAw25tmcWu1FYzwCs0GZQ&usqp=CAU" alt="" />
      </HeroImg>
      
    </HeroContainer>
  )
}
