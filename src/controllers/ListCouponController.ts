import { FastifyRequest, FastifyReply } from "fastify";
import { ListCouponService } from '../services/ListCouponService';

class ListCouponController {

  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const couponList = new ListCouponService();
      const coupons = await couponList.execute();
      return reply.send(coupons)
    } catch (error) {
      console.error(error);
      return reply.status(500).send({ error: "B.O meu vei" });
    }
  }
}

export { ListCouponController };