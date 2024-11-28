import { Module } from "@nestjs/common";
import { Prisma } from "@infra/config/prisma";
import { PrismaTaskRepository } from "@infra/repositories/prisma/taskEntity";
import { ITaskRepository } from "@domain/repositories/taskRepository";

@Module({
  providers: [
    Prisma,
    {
      useClass: PrismaTaskRepository,
      provide: ITaskRepository
    }
  ],
  exports: [
    {
      useClass: PrismaTaskRepository,
      provide: ITaskRepository
    }
  ]
})
export class DatabaseModule {}
