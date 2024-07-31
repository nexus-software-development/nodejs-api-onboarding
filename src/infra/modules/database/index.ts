import { PrismaExampleRepository } from "@infra/repositories/prisma/example";
import { Module } from "@nestjs/common";
import { ExampleRepository } from "@domain/repositories/example";
import { Prisma } from "@infra/config/prisma";
import { PrismaTaskRepository } from "@infra/repositories/prisma/task";
import { TaskRepository } from "@domain/repositories/task";

@Module({
  providers: [
    Prisma,
    {
      useClass: PrismaExampleRepository,
      provide: ExampleRepository
    },
    {
      useClass: PrismaTaskRepository,
      provide: TaskRepository
    }
  ],

  exports: [
    {
      useClass: PrismaExampleRepository,
      provide: ExampleRepository
    },
    {
      useClass: PrismaTaskRepository,
      provide: TaskRepository
    }
  ]
})
export class DatabaseModule {}
