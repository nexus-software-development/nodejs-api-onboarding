import { Module } from "@nestjs/common";
import { CreateExampleUseCase } from "@use-cases/example/create";
import { FindAllExampleUseCase } from "@use-cases/example/find-all";

@Module({
  providers: [FindAllExampleUseCase, CreateExampleUseCase]
})
export class ExampleModule { }
