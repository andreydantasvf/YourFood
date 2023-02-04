import { useState } from "react";
import { BiUpload } from "react-icons/bi";

import { api } from "../../services/api";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { SetIngredient } from "../../components/SetIngredient";
import { BackButton } from "../../components/BackButton";

export function CreateDish() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  function handleAddIngredient() {
    if (ingredients.includes(newIngredient)) {
      return alert("Esse ingrediente já foi adicionado!");
    }
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  function handleNewDish(event) {
    event.preventDefault();
    const dishUpload = new FormData();

    dishUpload.append("image", image);
    dishUpload.append("title", title);
    dishUpload.append("description", description);
    dishUpload.append("price", price);
    dishUpload.append("ingredients", JSON.stringify(ingredients));

    api.post("/dishes", dishUpload, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${dishUpload._boundary}`
      }
    }).then(() => {
      alert("Prato adicionado com sucesso!");
    }).catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível criar o prato!")
      }
    });
  }

  return (
    <Container>
      <Header />
      <main>
        <BackButton />

        <Form>
          <h1>Criar prato</h1>

          <div className="row-1">
            <label htmlFor="image">Imagem do prato
              <label htmlFor="image">
                <BiUpload size={24} />
                Selecione image
                <input type="file" name="image" id="image" required onChange={e => setImage(e.target.files[0])} />
              </label>
            </label>

            <label htmlFor="name">Nome
              <Input
                placeholder="Ex.: Salada Ceasar"
                type="text"
                id="name"
                onChange={e => setTitle(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="row-2">
            <section>
              Ingredientes

              <div className="ingredients">
                {
                  ingredients.map((ingredient, index) => (
                    <SetIngredient
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))
                }
                <SetIngredient
                  isNew
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </div>
            </section>

            <label htmlFor="price">Preço
              <Input
                placeholder="R$ 00.00"
                type="number"
                id="price"
                onChange={e => setPrice(e.target.value)}
                required
              />
            </label>
          </div>

          <label htmlFor="description">Descrição
            <textarea
              name="description"
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
              required
            />
          </label>

          <button onClick={handleNewDish} type="submit">Adicionar prato</button>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}