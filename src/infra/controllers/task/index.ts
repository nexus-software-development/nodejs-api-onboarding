import { CreateTaskResponse } from "@infra/config/swagger/responses/create";
import { Controller, Post, Body, Get, Patch } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CompleteTaskUseCase } from "@use-cases/task/complete-task";
import { CreateTaskUseCase } from "@use-cases/task/create";
import { FindAllTasksUseCase } from "@use-cases/task/find-all";
import { CreateTaskDto } from "./dtos/create-task";
import { FindAllTasksResponse } from "@infra/config/swagger/responses/find-all";
import { TaskEntity } from "@domain/entities/taskEntity";
import { CompleteTaskResponse } from "@infra/config/swagger/responses/complete-task";
import { CompleteTaskDto } from "./dtos/complete-task";

@ApiTags("Task")
@Controller("task")
export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly findAllTasksUseCase: FindAllTasksUseCase,
    private readonly completeTaskUseCase: CompleteTaskUseCase
  ) {}

  @Post()
  @CreateTaskResponse
  create(@Body() body: CreateTaskDto): Promise<void> {
    return this.createTaskUseCase.create(body.taskDescription);
  }

  @Get()
  @FindAllTasksResponse
  findAll(): Promise<{ task: TaskEntity[] }> {
    return this.findAllTasksUseCase.findAll();
  }

  @Patch()
  @CompleteTaskResponse
  completeTask(@Body() body: CompleteTaskDto): Promise<void> {
    return this.completeTaskUseCase.completeTask(body.id);
  }
}
