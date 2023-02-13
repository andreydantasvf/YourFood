const {Router} = require("express");

const usersRouter = require("./user.routes");
const sessionsRouter = require("./sessions.routes");
const dishesRouter = require("./dishes.routes");
const cartItemsRouter = require("./cartItems.routes");
const requestsRouter = require("./requests.router");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/dishes", dishesRouter);
routes.use("/cartItems", cartItemsRouter);
routes.use("/requests", requestsRouter);

module.exports = routes;