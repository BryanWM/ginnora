import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCouponController } from "../controllers/CreateCouponController";
import { CreateProductController } from "../controllers/CreateProductController";
import { ListProductController } from "../controllers/ListProductController";
import { ListCouponController } from "../controllers/ListCouponController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  // - Rota criar cupom
  fastify.post("/coupon", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCouponController().handle(request, reply);
  })
  // - Rota criar produto
  fastify.post("/product", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateProductController().handle(request, reply);
  });
  // - Rota listar produtos
  fastify.get("/products", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListProductController().handle(request, reply);
  });
  // - Rota listar cupons
  fastify.get("/coupons", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCouponController().handle(request, reply);
  });
}
