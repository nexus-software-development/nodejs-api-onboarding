import { ToDoRepository } from "@domain/repositories/todo-repository";
import { ToDoController } from "@infra/controllers/todo.controller";
import { PrismaToDoRepository } from "@infra/repositories/prisma/prisma-todo-repository";
import { Module } from "@nestjs/common";
import { CreateToDoUseCase } from "@use-cases/example/create/create-todo";

@Module({
  controllers: [ToDoController],
  providers: [
    {
      provide: ToDoRepository,
      useClass: PrismaToDoRepository
    },
    CreateToDoUseCase
  ]
})
export class ToDoModule {}
