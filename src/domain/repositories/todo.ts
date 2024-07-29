import { Todo } from "@domain/entities/todo";

export abstract class TodoRepository {
  abstract create(text: string): Promise<void>;
  abstract findAll(): Promise<Todo[]>;
}
