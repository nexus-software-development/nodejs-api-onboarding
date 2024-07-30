import { Todo } from "@domain/entities/todo";

export abstract class TodoRepository {
  abstract create(text: string): Promise<void>;
  abstract findAll(): Promise<Todo[]>;
  abstract findByText(text: string): Promise<Todo[]>;
  abstract setDone(id: string): Promise<void>;
}
