import { useEffect, useState } from "react";
import { SlMagnifier } from "react-icons/sl"

import { dishes } from "../../mocks/mockDishes";

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

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchDishes() {
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
          onChange={e => setSearch(e.target.value)}
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