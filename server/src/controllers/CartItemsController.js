const knex = require("../database/knex");

class CartItemsController {
  async create(request, response) {
    const { quantity, dish_id } = request.body;
    const user_id = request.user.id;

    await knex("cartItems").insert({
      quantity,
      dish_id,
      user_id
    });

    return response.status(201).json();
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("cartItems").where({ id }).delete();

    return response.status(204).json();
  }

  async update(request, response) {
    const { id } = request.params;
    const { request_id } = request.body;

    const cartItem = await knex("cartItems").where({ id }).first();

    cartItem.request_id = request_id;

    await knex("cartItems").update(cartItem).where({ id });

    return response.json();
  }

  async index(request, response) {
    const user_id = request.user.id;

    let cartItems;

    const checkAdmin = await knex("users").where({ id: user_id, isAdmin: true }).first();

    if (checkAdmin) {
      cartItems = await knex("cartItems")
    } else {
      cartItems = await knex("cartItems").where({ user_id });
    }

    const dishes = await knex("dishes");

    const cartItemsWithDish = cartItems.map(cartItem => {
      const cartItemDish = dishes.filter(dish => dish.id === cartItem.dish_id);

      return {
        ...cartItem,
        dish: cartItemDish
      };
    });

    return response.json(cartItemsWithDish);
  }
}

module.exports = CartItemsController;