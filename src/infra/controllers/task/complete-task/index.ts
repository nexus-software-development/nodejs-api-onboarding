import { Body, Controller, Patch } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CompleteTaskResponse } from "@infra/config/swagger/responses/complete-task";
import { CompleteTaskUseCase } from "@use-cases/task/complete-task";
import { CompleteTaskDto } from "../dtos/complete-task";

@ApiTags("Task")
@Controller("task")
export class CompleteTaskController {
  constructor(private readonly completeTaskUseCase: CompleteTaskUseCase) {}

  @Patch()
  @CompleteTaskResponse
  completeTask(@Body() body: CompleteTaskDto): Promise<void> {
    return this.completeTaskUseCase.completeTask(body.id);
  }
}
