import { Todo } from "@domain/entities/todo";
import { TodoRepository } from "@domain/repositories/todo";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindByTextTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async findByText(text: string): Promise<{ todos: Todo[] }> {
    const todos = await this.todoRepository.findByText(text);

    return { todos };
  }
}
