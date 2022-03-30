import { Request, Response } from 'express'
import { PerfilUserUseCase } from './PerfilUserUseCase'

export class PerfilUserController {
  async handle(request: Request, response: Response) {
    const { email } = request.body

    const perfilUserUseCase = new PerfilUserUseCase()

    const user = await perfilUserUseCase.execute(email)

    return response.json(user)
  }
}
