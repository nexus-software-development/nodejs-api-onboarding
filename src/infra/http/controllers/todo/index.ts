import { CreateToDoUseCase } from "@application/use-cases/to-do/create";
import { FindAllToDosUseCase } from "@application/use-cases/to-do/find-all";
import { MarkToDoAsCompletedUseCase } from "@application/use-cases/to-do/mark-as-completed";
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateToDoDto } from "./dtos/create-todo";
import { ToDo } from "@domain/entities/to-do";
import { CreateToDoResponse } from "@infra/config/swagger/responses/to-do/create";
import { FindAllToDosResponses } from "@infra/config/swagger/responses/to-do/find-all";
import { MarkToDoAsCompletedResponse } from "@infra/config/swagger/responses/to-do/mark-as-completed";

@ApiTags("ToDo")
@Controller("todo")
export class ToDoController {
  constructor(
    private readonly createToDoUseCase: CreateToDoUseCase,
    private readonly findAllToDosUseCase: FindAllToDosUseCase,
    private readonly markToDoAsCompletedUseCase: MarkToDoAsCompletedUseCase
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @CreateToDoResponse
  async create(@Body() body: CreateToDoDto): Promise<void> {
    return this.createToDoUseCase.create(body.text);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @FindAllToDosResponses
  async findAll(@Query("text") text?: string): Promise<{ toDos: ToDo[] }> {
    return this.findAllToDosUseCase.findAll(text);
  }

  @Patch(":id")
  @HttpCode(HttpStatus.OK)
  @MarkToDoAsCompletedResponse
  async markToDoAsCompleted(
    @Param("id", new ParseIntPipe()) id: number
  ): Promise<void> {
    return this.markToDoAsCompletedUseCase.markToDoAsCompleted(id);
  }
}
