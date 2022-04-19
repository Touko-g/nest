/*
  create-cat.dto.ts
*/
import { IsString, IsInt } from "class-validator";

export class CreateCatDto {
  @IsString()
  readonly name: string;
  @IsInt()
  readonly age: number;
  @IsInt()
  readonly breed: string;
}
