import { useEffect, useState } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { CartItem } from "../../components/CartItem";

import { api } from "../../services/api";

import { Container, Request, Payment } from "./styles"
import Pix from "../../assets/pix.png";
import { useNavigate } from "react-router-dom";

export function RequestDish() {
  const [cartItems, setCartItems] = useState(null);
  const [priceRequest, setPriceRequest] = useState(0);

  const navigation = useNavigate();

  async function handleDeleteCartItem(id) {
    await api.delete(`cartItems/${id}`);
    fetchCartItems();
  }

  function handleUpdateCartItems(request_id) {
    cartItems.forEach(async cartItem => {
      await api.patch(`cartItems/${cartItem.id}`, {
        request_id
      })
    })
  }

  async function handleCreateRequestDish() {
    try {
      const request_id = await api.post("/requests", {
        status: "Preparando",
        paymentMethod: "Pix"
      })

      handleUpdateCartItems(request_id.data);

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

  async function fetchCartItems() {
    const response = await api.get("/cartItems");
    const responseFiltered = await response.data.filter(cartItem => cartItem.request_id === null);
    const prices = responseFiltered.map(cartItem => cartItem.dish[0].price * cartItem.quantity);
    setPriceRequest(prices.reduce((accumulator, price) => accumulator + price));
    setCartItems(responseFiltered);
  }

  useEffect(() => {
    fetchCartItems();
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