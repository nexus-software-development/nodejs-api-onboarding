import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { FindAllTasksUseCase } from "@use-cases/task/find-all";
import { TaskEntity } from "@domain/entities/taskEntity";
import { FindAllTasksResponse } from "@infra/config/swagger/responses/find-all";

@ApiTags("Task")
@Controller("task")
export class FindAllTasksController {
  constructor(private readonly findAllTasksUseCase: FindAllTasksUseCase) {}

  @Get()
  @FindAllTasksResponse
  findAll(): Promise<{ task: TaskEntity[] }> {
    return this.findAllTasksUseCase.findAll();
  }
}
