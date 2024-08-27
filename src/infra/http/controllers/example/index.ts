import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateExampleUseCase } from "@application/use-cases/example/create";
import { FindAllExampleUseCase } from "@application/use-cases/example/find-all";
import { CreateExampleDto } from "./dtos/create-example";
import { Example } from "@prisma/client";
import { FindAllExampleResponses } from "@infra/config/swagger/responses/example/find-all";
import { CreateExampleResponse } from "@infra/config/swagger/responses/example/create";

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
