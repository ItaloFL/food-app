import { Router } from "express";
import { CreateProductController } from "../modules/product/useCases/createProduct/CreateProductController";

const productRoutes = Router()

const createProductController = new CreateProductController()


productRoutes.post('/product', createProductController.handle);

export { productRoutes }