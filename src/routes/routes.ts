import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCouponController } from "../controllers/CreateCouponController";
import { CreateProductController } from "../controllers/CreateProductController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true }
  })
  // - Rota criar cupom
  fastify.post("/coupon", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCouponController().handle(request, reply);
  })
  // - Rota criar produto
  fastify.post("/product", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateProductController().handle(request, reply);
  })
}
