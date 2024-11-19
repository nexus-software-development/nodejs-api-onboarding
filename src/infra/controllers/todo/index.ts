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
import { FindAllToDosResponses } from "@infra/config/swagger/todo/find-all";
import { CreateToDoResponse } from "@infra/config/swagger/todo/create";
import { MarkAsCompletedResponse } from "@infra/config/swagger/todo/mark-as-completed";

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
  @CreateToDoResponse
  async create(@Body() body: CreateToDoDto): Promise<ToDo> {
    return this.createToDoUseCase.execute(body.text);
  }

  @Get()
  @ApiOperation({ summary: "Get all ToDo items" })
  @ApiQuery({ name: "text", required: false, description: "Filter by text" })
  @FindAllToDosResponses
  async findAll(@Query("text") text?: string): Promise<ToDo[]> {
    return this.findAllToDosUseCase.execute(text);
  }

  @Patch(":id/complete")
  @ApiOperation({ summary: "Mark a ToDo item as completed" })
  @MarkAsCompletedResponse
  async markAsCompleted(@Param("id") id: string): Promise<ToDo> {
    return this.markToDoAsCompletedUseCase.execute(id);
  }
}
