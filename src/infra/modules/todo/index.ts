import { Module } from "@nestjs/common";
import { ToDoController } from "@infra/controllers/todo";
import { CreateToDoUseCase } from "@use-cases/todo/create";
import { FindAllToDosUseCase } from "@use-cases/todo/find-all";
import { DatabaseModule } from "../database";
import { MarkAsCompletedUseCase } from "@use-cases/todo/mark-as-completed";

@Module({
  imports: [DatabaseModule],
  controllers: [ToDoController],
  providers: [CreateToDoUseCase, FindAllToDosUseCase, MarkAsCompletedUseCase]
})
export class ToDoModule {}
