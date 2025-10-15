import prismaClient from "../prisma";

class CreateCouponService {
  async execute() {
    console.log("Callback: Rota CreateCoupon chamada")
    return { ok: true }
  }
}

export { CreateCouponService };