const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class RequestsController {
  async create(request, response) {
    const { status, paymentMethod } = request.body;
    const user_id = request.user.id;

    const [request_id] = await knex("requests").insert({
      status,
      paymentMethod,
      user_id
    });

    return response.status(201).json(request_id);
  }

  async delete(request, response) {
    const { id } = request.params;
    const user_id = request.user.id;

    const checkAdmin = await knex("users").where({ id: user_id, isAdmin: true }).first();

    if (!checkAdmin) {
      throw new AppError("Usuário não é administrador.", 400);
    }

    await knex("requests").where({ id }).delete();

    return response.status(204).json();
  }

  async update(request, response) {
    const { id } = request.params;
    const { status } = request.body;
    const user_id = request.user.id;

    const checkAdmin = await knex("users").where({ id: user_id, isAdmin: true }).first();

    if (!checkAdmin) {
      throw new AppError("Usuário não é administrador.", 400);
    }

    const requestClient = await knex("requests").where({ id }).first();

    requestClient.status = status;

    await knex("requests").update(requestClient).where({ id });

    return response.json();
  }

  async index(request, response) {
    const user_id = request.user.id;

    let requests;
    let cartItems;

    const checkAdmin = await knex("users").where({ id: user_id, isAdmin: true }).first();

    if (checkAdmin) {
      requests = await knex("requests");
      cartItems = await knex("cartItems");
    } else {
      requests = await knex("requests").where({ user_id });
      cartItems = await knex("cartItems").where({ user_id });
    }

    const dishes = await knex("dishes");

    const requestsWithCartItems = requests.map(requestClient => {
      const cartItemsRequest = cartItems.filter(cartItem => cartItem.request_id === requestClient.id);
      const cartItemsRequestWithDish = cartItemsRequest.map(cartItemRequestWithDish => {
        const cartItemDish = dishes.filter(dish => dish.id === cartItemRequestWithDish.dish_id);

        return {
          ...cartItemRequestWithDish,
          dish: cartItemDish
        }
      });

      return {
        ...requestClient,
        cartItems: cartItemsRequestWithDish
      };
    });

    return response.json(requestsWithCartItems);
  }
}

module.exports = RequestsController;