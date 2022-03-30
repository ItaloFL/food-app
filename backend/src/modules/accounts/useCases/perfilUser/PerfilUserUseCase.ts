import { client } from '../../../../database/prisma/Client'

export class PerfilUserUseCase {
  async execute(email: string) {
    const user = await client.user.findFirst({
      where: {
        email
      }
    })

    return user
  }
}
