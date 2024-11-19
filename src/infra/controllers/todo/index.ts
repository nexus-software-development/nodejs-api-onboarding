import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query
} from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateToDoUseCase } from "@use-cases/todo/create";
import { ToDo } from "@domain/entities/todo";
import { FindAllToDosUseCase } from "@use-cases/todo/find-all";
import { MarkAsCompletedUseCase } from "@use-cases/todo/mark-as-completed";
import { CreateToDoDto } from "./dtos/create-todo";

@ApiTags("todos")
@Controller("/todos")
export class ToDoController {
  constructor(
    private createToDoUseCase: CreateToDoUseCase,
    private findAllToDosUseCase: FindAllToDosUseCase,
    private markToDoAsCompletedUseCase: MarkAsCompletedUseCase
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

  @Patch(":id/complete")
  @ApiOperation({ summary: "Mark a ToDo item as completed" })
  @ApiResponse({
    status: 200,
    description: "The ToDo item has been marked as completed."
  })
  async markAsCompleted(@Param("id") id: string): Promise<ToDo> {
    return this.markToDoAsCompletedUseCase.execute(id);
  }
}
