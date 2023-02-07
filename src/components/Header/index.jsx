import { Link, useNavigate } from "react-router-dom";

import { RxExit } from "react-icons/rx";
import { GiShoppingCart } from "react-icons/gi";
import { BiDish } from "react-icons/bi";

import { useAuth } from "../../hooks/auth";

import { Container, Exit } from "./styles";

export function Header({ children }) {
  const { signOut, user } = useAuth();
  const checkUserIsAdmin = user.isAdmin == true;

  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  return (
    <Container>
      <div>
        <h2>YourFood</h2>
        {
          checkUserIsAdmin
            ?
            <a>Status de todos os pedidos</a>
            :
            <a>Status dos meus pedidos</a>
        }
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
            <Link to="">
              <GiShoppingCart size={24} />
              Meu pedido (0)
            </Link>
        }
        <Exit onClick={handleSignOut}>
          <RxExit />
        </Exit>
      </div>

    </Container >
  )
}