import { ToDoRepository } from "@domain/repositories/todo-repository";
import { ToDoRepositoryStub } from "@test/stubs/repositories/todo";
import { FindAllToDosUseCase } from ".";
import { ToDo } from "@domain/entities/todo";

describe("FindAllToDosUseCase", () => {
  let sut: FindAllToDosUseCase;
  let toDoRepository: ToDoRepository;

  beforeEach(() => {
    toDoRepository = new ToDoRepositoryStub();
    sut = new FindAllToDosUseCase(toDoRepository);
  });

  it("should return a list of ToDo items", async () => {
    const TODOS: ToDo[] = [
      {
        id: 1,
        text: "Buy groceries",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        text: "Clean the house",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    jest.spyOn(toDoRepository, "findAll").mockResolvedValue(TODOS);

    const result = await sut.execute();

    expect(result).toEqual(TODOS);
  });

  it("should return a list of ToDo items filtered by text", async () => {
    const TODOS: ToDo[] = [
      {
        id: 1,
        text: "Buy groceries",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    jest.spyOn(toDoRepository, "findAll").mockResolvedValue(TODOS);

    const result = await sut.execute("Buy groceries");

    expect(result).toEqual(TODOS);
  });
});
