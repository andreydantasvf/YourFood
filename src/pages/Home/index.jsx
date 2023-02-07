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
  const [mainsDishes, setMainsDishes] = useState(null);
  const [dessertsDishes, setDessertsDishes] = useState(null);
  const [drinksDishes, setDrinksDishes] = useState(null);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=&ingredients`);
      setMainsDishes(response.data.filter(dish => dish.category === "main"));
      setDrinksDishes(response.data.filter(dish => dish.category === "drink"));
      setDessertsDishes(response.data.filter(dish => dish.category === "dessert"));
    }

    fetchDishes();
  }, []);

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
          mainsDishes &&
          <SectionDish
            title="Pratos principais"
            data={mainsDishes}
          />
        }

        {
          dessertsDishes &&

          <SectionDish
            title="Sobremesas"
            data={dessertsDishes}
          />
        }

        {
          drinksDishes &&

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