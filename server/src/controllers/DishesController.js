const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class DishesController {
  async create(request, response) {
    const { title, description, category, price, ingredients } = request.body;
    const ingredientsArray = JSON.parse(ingredients);
    const user_id = request.user.id;

    const checkAdmin = await knex("users").where({ id: user_id, isAdmin: true }).first();

    if (!checkAdmin) {
      throw new AppError("Usuário não é administrador.", 400);
    }

    const checkDishAlreadyExistInDatabase = await knex("dishes").where({ title }).first();

    if (checkDishAlreadyExistInDatabase) {
      throw new AppError("Já existe um prato com esse nome.", 400);
    }

    const dishFileName = request.file.filename;
    const diskStorage = new DiskStorage();
    const filename = await diskStorage.saveFile(dishFileName);

    const [dish_id] = await knex("dishes").insert({
      title,
      description,
      category,
      price,
      image: filename
    });

    const ingredientsInsert = ingredientsArray.map(name => {
      return {
        name,
        dish_id
      }
    });

    await knex("ingredients").insert(ingredientsInsert);

    return response.status(201).json();
  }

  async delete(request, response) {
    const { id } = request.params;
    const user_id = request.user.id;

    const checkAdmin = await knex("users").where({ id: user_id, isAdmin: true }).first();

    if (!checkAdmin) {
      throw new AppError("Usuário não é administrador.", 400);
    }

    await knex("dishes").where({ id }).delete();

    return response.status(204).json();
  }

  async show(request, response) {
    const { id } = request.params;

    const dish = await knex("dishes").where({ id }).first();
    const ingredients = await knex("ingredients").where({ dish_id: id }).orderBy("name");

    return response.json({
      ...dish,
      ingredients
    });
  }

  async index(request, response) {
    const { title, ingredients } = request.query;

    let dishes;

    if (ingredients) {
      const filterIngredients = ingredients.split(',').map(ingredient => ingredient.trim());

      dishes = await knex("dishes")
        .select([
          "dishes.id",
          "dishes.title",
          "dishes.price",
          "dishes.category",
          "dishes.image"
        ])
        .whereLike("dishes.title", title)
        .whereIn("name", filterIngredients)
        .innerJoin("dishes", "dishes.id", "ingredients.dish_id")
        .orderBy("dishes.title")
    } else {
      dishes = await knex("dishes")
        .whereLike("title", `%${title}%`)
        .orderBy("title")
    }

    const dishesIngredients = await knex("ingredients");
    const dishesWithIngredients = dishes.map(dish => {
      const dishIngredient = dishesIngredients.filter(ingredient => ingredient.dish_id === dish.id);

      return {
        ...dish,
        ingredients: dishIngredient
      };
    });

    return response.status(200).json(dishesWithIngredients);
  }
}

module.exports = DishesController;