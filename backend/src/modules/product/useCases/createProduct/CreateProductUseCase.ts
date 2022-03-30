import { client } from "../../../../database/prisma/Client"

type ProductRequest = {
  name: string
  description: string
  image: string
  imageURL: string
  valor: number
  category: string
}

export class CreateProductUseCase {
  async execute({ name, description, image, imageURL, valor, category }: ProductRequest) {
    
    const verifyProduct = await client.product.findFirst({
      where: {
        name,
        valor
      }
    })

    if(verifyProduct){
      throw new Error('Produto já existente')
    }

    const product = await client.product.create({
      data: {
        name,
        description,
        image,
        imageURL,
        valor,
        category,
      }
    })

    return product
  }
}
