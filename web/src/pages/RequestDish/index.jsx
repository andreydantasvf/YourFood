import { useEffect, useState } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { CartItem } from "../../components/CartItem";

import { cart } from "../../mocks/mockCart";

import { Container, Request, Payment } from "./styles"
import Pix from "../../assets/pix.png";
import { useNavigate } from "react-router-dom";

export function RequestDish() {
  const [cartItems, setCartItems] = useState(null);
  const [priceRequest, setPriceRequest] = useState(0);

  const navigation = useNavigate();

  async function handleDeleteCartItem(id) {
    const dishes = cartItems.filter(item => item.id !== id);
    fetchCartItems(dishes);
  }

  async function handleCreateRequestDish() {
    try {
      alert("Pedido realizado com sucesso!");

      navigation(-1);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível fazer o seu pedido");
      }
    }
  }

  function fetchCartItems(cart) {
    const responseFiltered = cart.filter(cartItem => cartItem.request_id === null);
    const prices = responseFiltered.map(cartItem => cartItem.dish[0].price * cartItem.quantity);
    setPriceRequest(prices.reduce((accumulator, price) => accumulator + price));
    setCartItems(responseFiltered);
  }

  useEffect(() => {
    fetchCartItems(cart);
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <BackButton />
        <Request>
          <h2>Meu Pedido</h2>
          {
            cartItems &&
            cartItems.map(cartItem => {
              return (
                <CartItem
                  key={String(cartItem.id)}
                  handleDelete={() => handleDeleteCartItem(cartItem.id)}
                  image={cartItem.dish[0].image}
                  quantity={cartItem.quantity}
                  price={cartItem.dish[0].price}
                  title={cartItem.dish[0].title}
                />)
            }
            )
          }
          <span>Total: R$ {priceRequest}</span>
        </Request>

        <Payment>
          <h2>Pagamento</h2>
          <div>
            <h2><RiMoneyDollarCircleLine />PIX</h2>
            <img src={Pix} alt="Pix" />
          </div>
        </Payment>

        <Button
          title="Fazer pedido"
          className="create-dish"
          onClick={handleCreateRequestDish}
        />
      </main>

      <Footer />
    </Container>
  )
}