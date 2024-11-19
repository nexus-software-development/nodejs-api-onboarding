import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateToDoUseCase } from "@use-cases/example/create/create-todo";
import { CreateToDoDto } from "./example/dtos/create-todo.dto";
import { ToDo } from "@domain/entities/todo";
import { FindAllToDosUseCase } from "@use-cases/example/find-all/find-all-todos.use-case";

@ApiTags("todos")
@Controller("/todos")
export class ToDoController {
  constructor(
    private createToDoUseCase: CreateToDoUseCase,
    private findAllToDosUseCase: FindAllToDosUseCase
  ) {}

  @Post()
  @ApiOperation({ summary: "Create a new ToDo item" })
  @ApiResponse({
    status: 201,
    description: "The ToDo item has been successfully created."
  })
  async create(@Body() body: CreateToDoDto): Promise<ToDo> {
    return this.createToDoUseCase.execute(body.text);
  }

  @Get()
  @ApiOperation({ summary: "Get all ToDo items" })
  @ApiResponse({
    status: 200,
    description: "List of all ToDo items."
  })
  @ApiQuery({ name: "text", required: false, description: "Filter by text" })
  async findAll(@Query("text") text?: string): Promise<ToDo[]> {
    return this.findAllToDosUseCase.execute(text);
  }
}
