import { Module } from "@nestjs/common";
import { ToDoModule } from "../example";

@Module({
  imports: [ToDoModule]
})
export class AppModule {}
