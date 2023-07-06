import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";

import { dishes } from "../../mocks/mockDishes";
import { user } from "../../mocks/mockUser";

import { Container, Content } from "./styles"
import { Ingredient } from "../../components/Ingredient";

export function Dish() {
  const [dish, setDish] = useState(null);
  const [count, setCount] = useState(1);

  const params = useParams();
  const navigation = useNavigate();

  async function handleAddCartItem() {
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
      const data = dishes.find(dish => dish.id == params.id);
      setDish(data);
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
            <img src={dish.image} alt={`Imagem do prato ${dish.title}`} />
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
      <Footer />
    </Container>
  )
}