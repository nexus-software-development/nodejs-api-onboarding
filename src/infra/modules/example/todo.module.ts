import { Module } from "@nestjs/common";
import { ToDoController } from "@infra/controllers/todo.controller";
import { CreateToDoUseCase } from "@use-cases/example/create/create-todo";
import { FindAllToDosUseCase } from "@use-cases/example/find-all/find-all-todos.use-case";
import { DatabaseModule } from "../database";
import { MarkAsCompletedUseCase } from "@use-cases/example/mark-as-completed/mark-as-completed.use-case";

@Module({
  imports: [DatabaseModule],
  controllers: [ToDoController],
  providers: [CreateToDoUseCase, FindAllToDosUseCase, MarkAsCompletedUseCase]
})
export class ToDoModule {}
