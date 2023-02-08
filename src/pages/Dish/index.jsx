import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container, Content } from "./styles"
import { Ingredient } from "../../components/Ingredient";

export function Dish() {
  const [dish, setDish] = useState(null);
  const [count, setCount] = useState(1);

  const { user } = useAuth();

  const params = useParams();
  const navigation = useNavigate();

  async function handleDeleteDish() {
    const confirm = window.confirm("Deseja realmente remover este prato?");

    if (confirm) {
      await api.delete(`/dishes/${params.id}`);
      navigation(-1);
    }
  }

  async function handleAddCartItem() {
    await api.post("/cartItems", {
      quantity: count,
      dish_id: params.id
    })

    alert("Prato adicionado ao carrinho!");
    navigation(-1);
  }

  function handleAddCount() {
    setCount(count + 1);
  }

  function handleRemoveCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`dishes/${params.id}`);
      setDish(response.data);
    }

    fetchDish();
  }, [])

  return (
    <Container>
      <Header />

      {
        dish &&
        <main>
          <BackButton />

          <Content>
            <img src={`${api.defaults.baseURL}/files/${dish.image}`} alt={`Imagem do prato ${dish.title}`} />
            <div>
              <h1>{dish.title}</h1>
              <p>{dish.description}</p>
              <div className="ingredients">
                {dish.ingredients.map(ingredient => (
                  <Ingredient
                    key={String(ingredient.id)}
                    title={ingredient.name}
                  />
                ))}
              </div>
              <div className="buttons">
                <span>R$ {dish.price}</span>
                {user.isAdmin
                  ?
                  <Button title="Remover" onClick={handleDeleteDish} />
                  :
                  <div className="include">
                    <button
                      className="handle"
                      onClick={handleRemoveCount}
                    >
                      <AiOutlineMinus />
                    </button>

                    {count}

                    <button
                      className="handle"
                      onClick={handleAddCount}
                    >
                      <AiOutlinePlus />
                    </button>

                    <Button
                      title="Incluir"
                      icon={GiShoppingCart}
                      onClick={handleAddCartItem}
                    />
                  </div>
                }
              </div>
            </div>
          </Content>
        </main>
      }
    </Container>
  )
}