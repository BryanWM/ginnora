import prismaClient from "../prisma";
interface DeleteProductProps {
  id: string;
}

class DeleteProductService {
  async execute({ id }: DeleteProductProps) {
    if (!id) throw new Error("Id inválido ou nulo.")
    const findProduct = await prismaClient.product.findFirst({
      where: {
        id: id
      }
    })
    if (!findProduct) throw new Error("ID não encontrado.");
    await prismaClient.product.delete({
      where: {
        id: findProduct.id
      }
    })
    return { message: "Produto deletado com sucesso!" }
  }


}

export { DeleteProductService };