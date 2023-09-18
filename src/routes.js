import { Router } from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ProductsController from "./app/controllers/ProductsController";
import CategoriesController from "./app/controllers/CategoriesController";
import OrderController from "./app/controllers/OrderController";
import multerconfig from "./config/multerconfig";
import multer from "multer";
import authMiddleware from "./app/middlewares/auth"

const routes = new Router();
const uploads = multer(multerconfig)

routes.get('/', (req, res)=>{
    return res.json({message:'Hello to my API'})
})

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.post ("/products", uploads.single ('file'), ProductsController.store)
routes.get ("/products", ProductsController.index)
routes.put("/products/:id", uploads.single ('file'), ProductsController.update)

routes.post ("/categories", uploads.single('file'), CategoriesController.store)
routes.get ("/categories", CategoriesController.index)
routes.put ("/categories/:id", uploads.single ('file'), CategoriesController.update)

routes.post ("/order", OrderController.store)
routes.get ("/order", OrderController.index)
routes.put ("/order/:id", OrderController.update)

export default routes;
