import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database";
import { TaskController } from "@infra/controllers/task";
import { CreateTaskUseCase } from "@use-cases/task/create";
import { FindAllTaskUseCase } from "@use-cases/task/find-all";
import { ChangeTaskCheckUseCase } from "@use-cases/task/change-task-check";
import { DeleteTaskUseCase } from "@use-cases/task/delete-task";

@Module({
  imports: [DatabaseModule],
  controllers: [TaskController],
  providers: [
    CreateTaskUseCase,
    FindAllTaskUseCase,
    ChangeTaskCheckUseCase,
    DeleteTaskUseCase
  ]
})
export class TaskModule {}
