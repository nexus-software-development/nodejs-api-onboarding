import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database";
import { TodoController } from "@infra/controllers/todo";
import { FindAllTodoUseCase } from "@use-cases/todo/find-all";
import { CreateTodoUseCase } from "@use-cases/todo/create";
import { FindByTextTodoUseCase } from "@use-cases/todo/find-by-text";

@Module({
  imports: [DatabaseModule],
  controllers: [TodoController],
  providers: [FindAllTodoUseCase, CreateTodoUseCase, FindByTextTodoUseCase]
})
export class TodoModule {}
