import { Module } from "@nestjs/common";
import { Prisma } from "@infra/config/prisma";
import { ToDoRepository } from "@domain/repositories/todo-repository";
import { PrismaToDoRepository } from "@infra/repositories/prisma/prisma-todo-repository";

@Module({
  providers: [
    Prisma,
    {
      provide: ToDoRepository,
      useClass: PrismaToDoRepository
    }
  ],
  exports: [
    Prisma,
    {
      provide: ToDoRepository,
      useClass: PrismaToDoRepository
    }
  ]
})
export class DatabaseModule {}
