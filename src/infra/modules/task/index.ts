import { Module } from "@nestjs/common";
import { DatabaseModule } from "@infra/modules/database";
import { FindAllTasksUseCase } from "@use-cases/task/find-all";
import { CreateTaskUseCase } from "@use-cases/task/create";
import { CompleteTaskUseCase } from "@use-cases/task/complete-task";
import { TaskController } from "@infra/controllers/task";

@Module({
  imports: [DatabaseModule],
  controllers: [TaskController],
  providers: [FindAllTasksUseCase, CreateTaskUseCase, CompleteTaskUseCase]
})
export class TaskModule {}
