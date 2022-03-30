import { client } from '../../../../database/prisma/Client'

type CategoryRequest = {
  name: string
  description: string
}

export class CreateCategoryUseCase {
  async execute({ name, description }: CategoryRequest) {
    const verifyCategory = await client.category.findFirst({
      where: {
        name
      }
    })

    if (verifyCategory) {
      throw new Error('Categoria existente')
    }

    const category = await client.category.create({
      data: {
        name,
        description
      }
    })

    return category
  }
}
