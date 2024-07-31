import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateExampleUseCase } from "@use-cases/example/create";
import { FindAllExampleUseCase } from "@use-cases/example/find-all";
import { CreateExampleDto } from "./dtos/create-example";
import { Example } from "@prisma/client";

//Swagger
import { ApiTags } from "@nestjs/swagger";
import { FindAllExampleResponses } from "@infra/config/swagger/example/responses/find-all";
import { CreateExampleResponse } from "@infra/config/swagger/example/responses/create";

@ApiTags("Example")
@Controller("example")
export class ExampleController {
  constructor(
    private readonly createExampleUseCase: CreateExampleUseCase,
    private readonly findAllExampleUseCase: FindAllExampleUseCase
  ) {}

  @Post()
  @CreateExampleResponse
  create(@Body() body: CreateExampleDto): Promise<void> {
    return this.createExampleUseCase.create(body.text);
  }

  @Get()
  @FindAllExampleResponses
  findAll(): Promise<{ examples: Example[] }> {
    return this.findAllExampleUseCase.findAll();
  }
}
