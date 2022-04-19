import {
  Controller,
  Get,
  Post,
  Body,
  UseFilters,
  ForbiddenException,
  UsePipes,
  Param,
  UseInterceptors
} from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto";
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cat.interface";
import { HttpExceptionFilter } from "./http-exception.filter";
import { ParseIntPipe } from "./parse-int.pipe";
import { LoggingInterceptor } from "./logging.interceptor";
import { TransformInterceptor } from "./transform.interceptor";

@UseInterceptors(LoggingInterceptor, TransformInterceptor)
@Controller("cats")
export class CatsController {
  constructor(private catsService: CatsService) {
  }

  @Post()
  @UseFilters(HttpExceptionFilter)
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get(":id")
  async findOne(@Param("id", new ParseIntPipe()) id) {
    return this.catsService.findOne(id);
  }


  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
