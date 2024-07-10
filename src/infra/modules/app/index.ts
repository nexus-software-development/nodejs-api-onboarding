import { Module } from "@nestjs/common";
import { ExampleModule } from "@infra/modules/example";

@Module({
  imports: [ExampleModule]
})
export class AppModule { }
