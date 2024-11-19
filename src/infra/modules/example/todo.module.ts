import { ToDoController } from "@infra/controllers/todo.controller";
import { Module } from "@nestjs/common";
import { CreateToDoUseCase } from "@use-cases/example/create/create-todo";
import { FindAllToDosUseCase } from "@use-cases/example/find-all/find-all-todos.use-case";
import { DatabaseModule } from "../database";

@Module({
  imports: [DatabaseModule],
  controllers: [ToDoController],
  providers: [CreateToDoUseCase, FindAllToDosUseCase]
})
export class ToDoModule {}
