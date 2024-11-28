import { CreateTaskResponse } from "@infra/config/swagger/responses/create";
import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateTaskUseCase } from "@use-cases/task/create";
import { CreateTaskDto } from "../dtos/create-task";

@ApiTags("Task")
@Controller("task")
export class CreateTaskController {
  constructor(private readonly createTaskUseCase: CreateTaskUseCase) {}

  @Post()
  @CreateTaskResponse
  create(@Body() body: CreateTaskDto): Promise<void> {
    return this.createTaskUseCase.create(body.taskDescription);
  }
}
