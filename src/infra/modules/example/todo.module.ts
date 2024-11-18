import { ToDoRepository } from "@domain/repositories/todo-repository";
import { ToDoController } from "@infra/controllers/todo.controller";
import { PrismaToDoRepository } from "@infra/repositories/prisma/prisma-todo-repository";
import { Module } from "@nestjs/common";
import { CreateToDoUseCase } from "@use-cases/example/create/create-todo";
import { FindAllToDosUseCase } from "@use-cases/example/find-all/find-all-todos.use-case";

@Module({
  controllers: [ToDoController],
  providers: [
    {
      provide: ToDoRepository,
      useClass: PrismaToDoRepository
    },
    CreateToDoUseCase,
    FindAllToDosUseCase
  ]
})
export class ToDoModule {}
