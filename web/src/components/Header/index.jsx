import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { RxExit } from "react-icons/rx";
import { GiShoppingCart, GiHamburgerMenu } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
import { FiX } from 'react-icons/fi'

import { user } from "../../mocks/mockUser";

import { Container, Exit, Hamburger } from "./styles";

export function Header({ children }) {
  const [cartItems] = useState(2);
  const [showMenu, setShowMenu] = useState(false);

  const checkUserIsAdmin = user.isAdmin == true;

  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <Container>
      <div>
        <h2>YourFood</h2>
        <Link
          to="/requests"
        >
          {checkUserIsAdmin ? "Status de todos os pedidos" : "Status dos meus pedidos"}
        </Link>
      </div>

      {children}

      <div className="linksDishes">
        {
          checkUserIsAdmin
            ?
            <Link to="/create-dish">
              <BiDish size={24} />
              Criar prato
            </Link>
            :
            <Link to="/requestDish">
              <GiShoppingCart size={24} />
              Meu pedido ({cartItems})
            </Link>
        }
        <Exit onClick={handleSignOut}>
          <RxExit />
        </Exit>
      </div>

      <Hamburger>
        <button onClick={handleShowMenu}>
          {
            showMenu ? <FiX /> : <GiHamburgerMenu />
          }
        </button>

        <nav className={showMenu ? 'show' : 'disabled'}>
          {
            checkUserIsAdmin
              ?
              <Link to="/create-dish">
                <BiDish size={24} />
                Criar prato
              </Link>
              :
              <Link to="/requestDish">
                <GiShoppingCart size={24} />
                Meu pedido ({cartItems})
              </Link>
          }
          <Link
            to="/requests"
          >
            {checkUserIsAdmin ? "Status de todos os pedidos" : "Status dos meus pedidos"}
          </Link>
          <Exit onClick={handleSignOut}>
            <RxExit /> Sair
          </Exit>

        </nav>
      </Hamburger>

    </Container >
  )
}