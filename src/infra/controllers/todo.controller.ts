import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateToDoUseCase } from "@use-cases/example/create/create-todo";
import { CreateToDoDto } from "./example/dtos/create-todo.dto";
import { ToDo } from "@domain/entities/todo";

@ApiTags("todos")
@Controller("/todos")
export class ToDoController {
  constructor(private createToDoUseCase: CreateToDoUseCase) {}

  @Post()
  @ApiOperation({ summary: "Create a new ToDo item" })
  @ApiResponse({
    status: 201,
    description: "The ToDo item has been successfully created."
  })
  async create(@Body() body: CreateToDoDto): Promise<ToDo> {
    return this.createToDoUseCase.execute(body.text);
  }
}
