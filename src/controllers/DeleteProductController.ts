import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteProductService } from "../services/DeleteProductService"

class DeleteProductController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.query as { id: string };
      const deleteProductService = new DeleteProductService();
      const product = await deleteProductService.execute({ id });
      reply.send(product);
    } catch (error) {
      console.error(error);
      return reply.status(500).send({ error: "B.O meu vei" });
    }
  }

}

export { DeleteProductController };