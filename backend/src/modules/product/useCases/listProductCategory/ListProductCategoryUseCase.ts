import { client } from "../../../../database/prisma/Client";



export class ListProductCaregoryUseCase {

  async execute(){

    const products = await client.product.findMany({
      where: {
        
      }
    })
  }
}