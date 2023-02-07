import { useEffect, useState } from "react";
import { SlMagnifier } from "react-icons/sl"

import { api } from "../../services/api";

import BannerImg from "../../assets/banner.png";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { SectionDish } from "../../components/SectionDish";

import { Container, Banner } from "./styles";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [mainsDishes, setMainsDishes] = useState([]);
  const [dessertsDishes, setDessertsDishes] = useState([]);
  const [drinksDishes, setDrinksDishes] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}&ingredients`);
      setDishes(response.data);

      setMainsDishes(dishes.filter(dish => dish.category === "main"));
      setDrinksDishes(dishes.filter(dish => dish.category === "drink"));
      setDessertsDishes(dishes.filter(dish => dish.category === "dessert"));
    }

    fetchDishes();
  }, [search]);

  return (
    <Container>
      <Header>
        <Input
          placeholder="Busque pelas opções de pratos"
          icon={SlMagnifier}
        />
      </Header>

      <main>
        <Banner>
          <img src={BannerImg} alt="Banner" />
          <div className="content">
            <h2>Sabores inigualáveis</h2>
            <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
          </div>
        </Banner>

        {
          mainsDishes.length > 0 &&

          <SectionDish
            title="Pratos principais"
            data={mainsDishes}
          />
        }

        {
          dessertsDishes.length > 0 &&

          <SectionDish
            title="Sobremesas"
            data={dessertsDishes}
          />
        }

        {
          drinksDishes.length > 0 &&

          <SectionDish
            title="Bebidas"
            data={drinksDishes}
          />
        }
      </main>

      <Footer />
    </Container>
  )
}