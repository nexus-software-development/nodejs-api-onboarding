import { ToDoRepository } from "@domain/repositories/todo-repository";
import { CreateToDoUseCase } from ".";
import { ToDoRepositoryStub } from "@test/stubs/repositories/todo";

describe("CreateToDoUseCase", () => {
  let sut: CreateToDoUseCase;
  let toDoRepository: ToDoRepository;

  beforeEach(() => {
    toDoRepository = new ToDoRepositoryStub();
    sut = new CreateToDoUseCase(toDoRepository);
  });

  it("should be able to create a new ToDo item", async () => {
    const createSpy = jest.spyOn(toDoRepository, "create");

    const TEXT = "Buy groceries";

    await sut.execute(TEXT);

    expect(createSpy).toHaveBeenCalledWith({
      id: 0,
      text: TEXT,
      isCompleted: false,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date)
    });
  });

  it("should return the created ToDo with an id", async () => {
    const TEXT = "Buy groceries";

    const result = await sut.execute(TEXT);

    expect(result).toEqual({
      id: 1,
      text: TEXT,
      isCompleted: false,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date)
    });
  });
});
