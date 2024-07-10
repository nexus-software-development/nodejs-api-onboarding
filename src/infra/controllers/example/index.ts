import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateExampleUseCase } from "@use-cases/example/create";
import { FindAllExampleUseCase } from "@use-cases/example/find-all";
import { CreateExampleDto } from "./dtos/create-example";
import { Example } from "@prisma/client";

@ApiTags("Example")
@Controller("example")
export class ExampleController {
  constructor(
    private readonly createExampleUseCase: CreateExampleUseCase,
    private readonly findAllExampleUseCase: FindAllExampleUseCase
  ) {}

  @Post()
  create(@Body() body: CreateExampleDto): Promise<void> {
    return this.createExampleUseCase.create(body.text);
  }

  @Get()
  findAll(): Promise<Example[]> {
    return this.findAllExampleUseCase.findAll();
  }
}
