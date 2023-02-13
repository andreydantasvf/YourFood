const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/uploads");

const DishesController = require("../controllers/DishesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const dishesController = new DishesController();

dishesRoutes.use(ensureAuthenticated);

dishesRoutes.get('/', dishesController.index);
dishesRoutes.get('/:id', dishesController.show);
dishesRoutes.post('/', upload.single("image"), dishesController.create);
dishesRoutes.delete('/:id', dishesController.delete);

module.exports = dishesRoutes;