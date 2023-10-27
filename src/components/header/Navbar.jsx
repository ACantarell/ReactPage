import {ContainerNavbar, NavbarImg, NavbarLinks} from "./styled"

export const Navbar = () => {
  return (
    
    <ContainerNavbar>
      {/* Logo de la pagina */}
      <div>
        <a href="#">
          <NavbarImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx7rdzBNNJBTx6ah09DD7MMoNbrM167ysIOQ&usqp=CAU" alt="" />
        </a>
      </div>

      {/* botonoes de la pagina */}
      <div>
        <NavbarLinks>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </NavbarLinks>
      </div>

    </ContainerNavbar>
  )
}
