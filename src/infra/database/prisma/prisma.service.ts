import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { env } from "process";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ["error", "info"],
      datasourceUrl: env.DATABASE_URL
    });
  }

  async onModuleInit(): Promise<void> {
    return this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    return this.$disconnect();
  }
}
