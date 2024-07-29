import { Todo } from "@domain/entities/todo";
import { TodoRepository } from "@domain/repositories/todo";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindAllTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async findAll(): Promise<{ todos: Todo[] }> {
    const todos = await this.todoRepository.findAll();

    return { todos };
  }
}
