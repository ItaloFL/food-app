import { Router } from "express";
import { CreateCategoryController } from "../modules/categories/useCases/ createCategory/CreateCategoryController";

const categoryRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoryRoutes.post('/category', createCategoryController.handle);

export { categoryRoutes }