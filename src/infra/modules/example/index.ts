import { Module } from "@nestjs/common";
import { CreateExampleUseCase } from "@application/use-cases/example/create";
import { FindAllExampleUseCase } from "@application/use-cases/example/find-all";
import { DatabaseModule } from "@infra/modules/database";
import { ExampleController } from "@infra/controllers/example";

@Module({
  imports: [DatabaseModule],
  controllers: [ExampleController],
  providers: [FindAllExampleUseCase, CreateExampleUseCase]
})
export class ExampleModule {}
