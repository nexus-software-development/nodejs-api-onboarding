import { Module } from "@nestjs/common";
import { ToDoModule } from "../todo";

@Module({
  imports: [ToDoModule]
})
export class AppModule {}
