import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCouponService } from "../services/DeleteCouponService"

class DeleteCouponController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { code } = request.query as { code: string };
      const deleteCouponService = new DeleteCouponService();
      const coupon = await deleteCouponService.execute({ code });
      reply.send(coupon);
    } catch (error) {
      console.error(error);
      return reply.status(500).send({ error: "B.O meu vei" });
    }
  }

}

export { DeleteCouponController };