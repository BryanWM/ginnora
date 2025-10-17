import { FastifyRequest, FastifyReply } from "fastify";
import { ListProductService } from '../services/ListProductService';

class ListProductController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const listProductService = new ListProductService();
      const products = await listProductService.execute();
      return reply.send(products);
    } catch (error) {
      console.error(error);
      return reply.status(500).send({ error: "B.O meu vei" });
    }
  }
}

export { ListProductController };