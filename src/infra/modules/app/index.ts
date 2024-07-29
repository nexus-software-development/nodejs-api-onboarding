import { Module } from "@nestjs/common";
import { ExampleModule } from "@infra/modules/example";
import { TodoModule } from "../todo";

@Module({
  imports: [ExampleModule, TodoModule]
})
export class AppModule {}
