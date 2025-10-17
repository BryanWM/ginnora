import { FastifyRequest, FastifyReply } from "fastify";
import { CreateProductService } from "../services/CreateProductService"
interface ProductProps {
  name: string,
  description: string,
  price: number,
  imageUrl: string
}
export class CreateProductController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { name, description, price, imageUrl } = request.body as ProductProps;
      const createProductService = new CreateProductService();
      const product = await createProductService.execute({
        name,
        description,
        price,
        imageUrl,
      });
      return reply.send(product);
    } catch (e) {
      console.log(e)
      return reply.status(400); // Erro no request, rever informações
    }
  }
}