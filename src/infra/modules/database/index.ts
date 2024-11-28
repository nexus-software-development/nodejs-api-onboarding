import { Module } from "@nestjs/common";
import { Prisma } from "@infra/config/prisma";
import { PrismaTaskRepository } from "@infra/repositories/prisma/taskEntity";
import { TaskRepository } from "@domain/repositories/taskRepository";

@Module({
  providers: [
    Prisma,
    {
      useClass: PrismaTaskRepository,
      provide: TaskRepository
    }
  ],
  exports: [TaskRepository]
})
export class DatabaseModule {}
