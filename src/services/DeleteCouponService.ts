import prismaClient from "../prisma";
interface DeleteCouponProps {
  code: string;
}

class DeleteCouponService {
  async execute({ code }: DeleteCouponProps) {
    if (!code) throw new Error("Cupom inválido.")
    const findCoupon = await prismaClient.coupon.findFirst({
      where: {
        code: code
      }
    })
    if (!findCoupon) throw new Error("Cupom não encontrado.");
    await prismaClient.coupon.delete({
      where: {
        code: findCoupon.code
      }
    })
    return { message: "Produto deletado com sucesso!" }
  }


}

export { DeleteCouponService };