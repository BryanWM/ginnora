import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCouponService } from '../services/CreateCouponService';

type DiscountType = 'percent' | 'fixed'
interface CouponProps {
  code: string,
  type: DiscountType,
  value: number,
  active: boolean
}

export class CreateCouponController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { code, type, value, active } = request.body as CouponProps;
      const createCouponService = new CreateCouponService();
      const coupon = await createCouponService.execute({
        code,
        type,
        value,
        active
      });
      return reply.send(coupon);
    } catch (e) {
      console.log(e)
      return reply.status(400); // Erro no request, rever informações
    }
  }
}
