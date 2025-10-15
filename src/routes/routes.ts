import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCouponController } from "../controllers/CreateCouponController";
export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true }
  })

  fastify.post("/coupon", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCouponController().handle(request, reply);
  })
}
