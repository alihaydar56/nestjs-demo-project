import { Injectable, NotFoundException } from '@nestjs/common';
import CreateProductDto from './dto/create-product.dto';
import { Product } from './product.model';
import { v4 as uuid } from 'uuid';
@Injectable()
export class ProductService {
  products: Product[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product {
    const product = this.products.find((product) => product.id == id);
    if (!product) {
      throw new NotFoundException(
        'product with that id :' + id + 'is not found.',
      );
    } else {
      return product;
    }
  }

  addProduct(productDto: CreateProductDto): Product {
    const { title, description, price } = productDto;
    const product: Product = {
      id: uuid(),
      title,
      description,
      price,
    };
    this.products.push(product);
    return product;
  }
  deleteProductById(id: string): void {
    const p = this.getProductById(id);
    this.products = this.products.filter((product) => product.id !== p.id);
  }
  updatePrice(id: string, price: number): Product {
    const product = this.getProductById(id);
    product.price = price;
    return product;
  }
}
