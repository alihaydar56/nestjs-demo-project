import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import CreateProductDto from './dto/create-product.dto';
import { Product } from './product.model';
import { ProductService } from './products.service';
@Controller('products')
export class ProductController {
  constructor(private ProductService: ProductService) {}

  @Get()
  getAllProducts(): Product[] {
    return this.ProductService.getProducts();
  }
  @Get('/getProductById/:id')
  getProductById(@Param('id') id: string): Product {
    return this.ProductService.getProductById(id);
  }
  @Post('addProduct')
  addProduct(@Body() productDto: CreateProductDto): any {
    return this.ProductService.addProduct(productDto);
  }
  @Delete('deleteProduct/:id')
  deleteProductById(@Param('id') id: string): void {
    this.ProductService.deleteProductById(id);
  }
  @Patch('updateProduct/:id')
  updateProduct(
    @Param('id') id: string,
    @Body('price') price: number,
  ): Product {
    return this.ProductService.updatePrice(id, price);
  }
}
