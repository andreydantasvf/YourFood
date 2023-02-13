const { Router } = require("express");

const RequestsController = require("../controllers/RequestsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const requestsRoutes = Router();

const requestsController = new RequestsController();

requestsRoutes.use(ensureAuthenticated);

requestsRoutes.get('/', requestsController.index);
requestsRoutes.post('/', requestsController.create);
requestsRoutes.patch('/:id', requestsController.update);
requestsRoutes.delete('/:id', requestsController.delete);

module.exports = requestsRoutes;