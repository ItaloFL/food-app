import { Router } from "express";
import { categoryRoutes } from "./category.routes";
import { productRoutes } from "./product.routes";
import { userRoutes } from "./users.routes";

const routes = Router()

routes.use(userRoutes);
routes.use(productRoutes);
routes.use(categoryRoutes);

export { routes };