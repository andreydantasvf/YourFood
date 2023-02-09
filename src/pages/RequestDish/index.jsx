import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";
import { CartItem } from "../../components/CartItem";

import { api } from "../../services/api";

import { Container, Request, Payment } from "./styles"

export function RequestDish() {
  const [cartItems, setCartItems] = useState(null);
  const [priceRequest, setPriceRequest] = useState(0);

  async function handleDeleteCartItem(id) {
    await api.delete(`cartItems/${id}`);
    fetchCartItems();
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
        </Payment>
      </main>

      <Footer />
    </Container>
  )
}