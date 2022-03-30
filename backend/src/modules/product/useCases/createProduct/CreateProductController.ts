import { Request, Response } from 'express'
import { CreateProductUseCase } from './CreateProductUseCase'

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, description, image, imageURL, valor, category } = request.body

    const createProductUseCase = new CreateProductUseCase()

    const product = await createProductUseCase.execute({
      name,
      description,
      image,
      imageURL,
      valor,
      category
    })

    return response.json(product)
  }
}
