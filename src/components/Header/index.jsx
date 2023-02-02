import { useNavigate } from "react-router-dom";

import { RxExit } from "react-icons/rx";
import { GiShoppingCart } from "react-icons/gi";
import { BiDish } from "react-icons/bi";

import { useAuth } from "../../hooks/auth";

import { Container, Exit } from "./styles";

import { Button } from "../Button";

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

      <div>
        {
          checkUserIsAdmin
            ?
            <Button
              title="Criar prato"
              icon={BiDish}
            />
            :
            <Button
              title="Meu pedido (0)"
              icon={GiShoppingCart}
            />
        }
        <Exit onClick={handleSignOut}>
          <RxExit />
        </Exit>
      </div>
    </Container>
  )
}