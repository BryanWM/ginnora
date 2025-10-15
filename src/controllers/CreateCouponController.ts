import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCouponService } from '../services/CreateCouponService';

class CreateCouponController {
  async handle(request: FastifyRequest, reply: FastifyReply) {

    const couponService = new CreateCouponService();

    const coupon = await couponService.execute();

    reply.send(coupon);

  }
}

export { CreateCouponController }