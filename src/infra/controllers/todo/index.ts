import { CreateTodoResponse } from "@infra/config/swagger/responses/create";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateTodoUseCase } from "@use-cases/todo/create";
import { FindAllTodoUseCase } from "@use-cases/todo/find-all";
import { CreateTodoDto } from "./dtos/create-todo";
import { FindAllTodoResponses } from "@infra/config/swagger/responses/find-all";
import { Todo } from "@prisma/client";

@ApiTags("Todo")
@Controller("todo")
export class TodoController {
  constructor(
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly findAllTodoUseCase: FindAllTodoUseCase
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
}
