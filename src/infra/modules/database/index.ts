import { PrismaExampleRepository } from "@infra/repositories/prisma/example";
import { Module } from "@nestjs/common";
import { ExampleRepository } from "@application/repositories/example";
import { Prisma } from "@infra/config/prisma";

@Module({
  providers: [
    Prisma,
    {
      useClass: PrismaExampleRepository,
      provide: ExampleRepository
    }
  ],
  exports: [
    {
      useClass: PrismaExampleRepository,
      provide: ExampleRepository
    }
  ]
})
export class DatabaseModule {}
