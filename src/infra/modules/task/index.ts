import { Module } from "@nestjs/common";
import { DatabaseModule } from "@infra/modules/database";
import { FindAllTasksUseCase } from "@use-cases/task/find-all";
import { CreateTaskUseCase } from "@use-cases/task/create";
import { FindAllTasksController } from "@infra/controllers/task/find-all";
import { CreateTaskController } from "@infra/controllers/task/create";
import { CompleteTaskController } from "@infra/controllers/task/complete-task";
import { CompleteTaskUseCase } from "@use-cases/task/complete-task";

@Module({
  imports: [DatabaseModule],
  controllers: [
    FindAllTasksController,
    CreateTaskController,
    CompleteTaskController
  ],
  providers: [FindAllTasksUseCase, CreateTaskUseCase, CompleteTaskUseCase]
})
export class TaskModule {}
