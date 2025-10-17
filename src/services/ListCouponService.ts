import prismaClient from "../prisma";

export class ListCouponService {
  async execute() {
    try {
      const coupons = await prismaClient.coupon.findMany();
      return coupons;
    } catch (error) {
      console.error('Error in ListProductService:', error);
      throw error;
    }
  }
}