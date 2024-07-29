import { CreateTodoResponse } from "@infra/config/swagger/responses/create";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateTodoUseCase } from "@use-cases/todo/create";
import { FindAllTodoUseCase } from "@use-cases/todo/find-all";
import { CreateTodoDto } from "./dtos/create-todo";
import { FindAllTodoResponses } from "@infra/config/swagger/responses/find-all";
import { Todo } from "@prisma/client";
import { FindByTextTodoUseCase } from "@use-cases/todo/find-by-text";

@ApiTags("Todo")
@Controller("todo")
export class TodoController {
  constructor(
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly findAllTodoUseCase: FindAllTodoUseCase,
    private readonly findByTextTodoUseCase: FindByTextTodoUseCase
  ) {}

  @Post()
  @CreateTodoResponse
  create(@Body() body: CreateTodoDto): Promise<void> {
    return this.createTodoUseCase.create(body.text);
  }

  @Get()
  @FindAllTodoResponses
  findAll(): Promise<{ todos: Todo[] }> {
    return this.findAllTodoUseCase.findAll();
  }

  @Get(":text")
  @FindAllTodoResponses
  findByText(@Param("text") text: string): Promise<{ todos: Todo[] }> {
    return this.findByTextTodoUseCase.findByText(text);
  }
}
