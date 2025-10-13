import type { Coupon } from "./Coupon";

interface ProductProps {
  name: string;
  description?: string; //Se torna opcional
  image_url: string;
  price: number;
}
export class Product {
  name: string;
  description: string;
  image_url: string;
  price: number;
  constructor({ name, description = "", image_url, price }: ProductProps) {
    if (price < 0) throw new Error("O valor não pode ser menor que 0.");
    if (!image_url) throw new Error("O produto precisa de uma imagem.");
    if (!name) throw new Error("O produto precisa de um nome.");

    this.name = name;
    this.description = description;
    this.image_url = image_url;
    this.price = price;
  }

  isValid(): boolean {
    return this.price > 0 &&
      this.image_url.trim().length > 0 &&
      this.name.trim().length > 0;
  } //Metodo para verificar se todos os campos estão preenchidos corretamente

  applyCoupon(coupon: Coupon): number {
    if (!coupon.canUse()) throw new Error("Cupom não pode ser utilizado.");
    const discountedPrice = coupon.applyDiscount(this.price);
    coupon.use();
    return discountedPrice;
  } // Metodo para realizar a aplicação do cupom de desconto

  updatePrice(newPrice: number): void {
    if (newPrice <= 0) throw new Error("O preço precisa ser maior que 0.");
    this.price = newPrice;
  } // Metodo para atualizar/ajustar preço

  calculateTotal(quantity: number): number {
    if (quantity <= 0) return 0;
    return this.price * quantity;
  } // Calcula o valor total referente a quantidade informada

  getFormattedPrice(): string {
    return `R$ ${this.price.toFixed(2).replace(".", ",")}`
  } // Retorna o preço formatado

  toObject(): ProductProps {
    return {
      name: this.name,
      description: this.description,
      image_url: this.image_url,
      price: this.price
    }
  } // Converte em um objeto simples
}
