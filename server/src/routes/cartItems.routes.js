const { Router } = require("express");

const CartItemsController = require("../controllers/CartItemsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const cartItemsRoutes = Router();

const cartItemsController = new CartItemsController();

cartItemsRoutes.use(ensureAuthenticated);

cartItemsRoutes.get('/', cartItemsController.index);
cartItemsRoutes.post('/', cartItemsController.create);
cartItemsRoutes.delete('/:id', cartItemsController.delete);
cartItemsRoutes.patch('/:id', cartItemsController.update);

module.exports = cartItemsRoutes;