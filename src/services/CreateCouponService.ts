import prismaClient from "../prisma";

type DiscountType = 'percent' | 'fixed'
interface CouponProps {
  code: string,
  type: DiscountType,
  value: number,
  active: boolean

}

export class CreateCouponService {
  async execute(couponData: CouponProps) {
    // Validações básicas
    if (couponData.value <= 0) throw new Error("O valor deve ser maior que 0.");
    if (couponData.type !== 'percent' && couponData.type !== 'fixed') {
      throw new Error("Tipo de desconto inválido. Selecione Percentual ou Fixo");
    }
    const coupon = await prismaClient.coupon.create({
      data: couponData
    });
    return coupon;
  }
}