export abstract class TodoRepository {
  abstract create(text: string): Promise<void>
  abstract switchTodoCheck(id: string): Promise<void>
  abstract findAll(id: string): Promise<void>
}
