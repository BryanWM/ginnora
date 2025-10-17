import prismaClient from "../prisma";

interface ProductProps {
  name: string,
  description: string,
  price: number,
  imageUrl: string
}
export class CreateProductService {
  async execute(productData: ProductProps) {
    // Validações básicas
    if (!productData.name) throw new Error("É necessário que o produto tenha um nome.");
    if (productData.price <= 0) throw new Error("É necessário que o produto tenha o valor maior que 0.");
    if (!productData.imageUrl) throw new Error("É necessário que o produto tenha uma imagem.");

    const product = await prismaClient.product.create({
      data: productData
    });
    return product;
  }
}