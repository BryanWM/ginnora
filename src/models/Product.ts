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
}

