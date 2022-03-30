import { client } from '../../../../database/prisma/Client';
import { hash } from 'bcryptjs';

type UserRequest = {
  name: string
  email: string
  password: string
  sexo: string
  image: string
  imageURL: string
}

export class CreateUserUseCase {
  async execute({ name, email, password, sexo, image, imageURL }: UserRequest) {
    const verifyUser = await client.user.findFirst({
      where: {
        email
      }
    })

    if (verifyUser) {
      throw new Error('Usuário já existe')
    }

    const passwordHash = await hash(password, 8)

    const user = await client.user.create({
      data: {
        name,
        email,
        image,
        imageURL,
        password: passwordHash,
        sexo
      }
    })

    return user
  }
}
