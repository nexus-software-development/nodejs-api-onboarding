import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from "@nestjs/common";
import { CreateTaskDTO } from "./dtos/create-task";
import { Task } from "@prisma/client";
import { ApiTags } from "@nestjs/swagger";
import { CreateTaskResponse } from "@infra/config/swagger/task/create";
import { FindAllTasksResponse } from "@infra/config/swagger/task/find-all";
import { DeleteTaskResponse } from "@infra/config/swagger/task/delete-task";
import { ChangeTaskCheckResponse } from "@infra/config/swagger/task/change-task-check";
import { ChangeTaskCheckUseCase } from "@use-cases/task/change-task-check";
import { CreateTaskUseCase } from "@use-cases/task/create";
import { FindAllTaskUseCase } from "@use-cases/task/find-all";
import { DeleteTaskUseCase } from "@use-cases/task/delete-task";

@ApiTags("Task")
@Controller("task")
export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly findAllTaskUseCase: FindAllTaskUseCase,
    private readonly changeTaskCheckUseCase: ChangeTaskCheckUseCase,
    private readonly deleteTaskUseCase: DeleteTaskUseCase
  ) {}

  @Post()
  @CreateTaskResponse
  create(@Body() body: CreateTaskDTO): Promise<void> {
    return this.createTaskUseCase.create(body.text);
  }

  @Get()
  @FindAllTasksResponse
  findAll(): Promise<{ tasks: Task[] }> {
    return this.findAllTaskUseCase.findAll();
  }

  @Patch(":id")
  @ChangeTaskCheckResponse
  changeTaskCheck(@Param("id") id: string): Promise<void> {
    return this.changeTaskCheckUseCase.changeTaskCheck(Number(id));
  }

  @Delete(":id")
  @DeleteTaskResponse
  deleteTask(@Param("id") id: string): Promise<void> {
    return this.deleteTaskUseCase.deleteTask(Number(id));
  }
}
