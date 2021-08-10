import {IsNotEmpty,IsNumber,IsString} from "class-validator";

export default class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
