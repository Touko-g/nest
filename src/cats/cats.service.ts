import { Injectable } from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findOne(age: number | string) {
    return this.cats.find(item => item.age === age);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
