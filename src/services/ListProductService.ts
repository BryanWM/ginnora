// src/services/ListProductService.ts
import prismaClient from "../prisma";

export class ListProductService {
  async execute() {
    try {
      const products = await prismaClient.product.findMany();
      return products;
    } catch (error) {
      console.error('Error in ListProductService:', error);
      throw error;
    }
  }
}