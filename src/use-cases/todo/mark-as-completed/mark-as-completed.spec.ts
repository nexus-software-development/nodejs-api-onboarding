import { MarkAsCompletedUseCase } from ".";
import { ToDo } from "@domain/entities/todo";
import { ToDoRepository } from "@domain/repositories/todo-repository";
import { ToDoRepositoryStub } from "@test/stubs/repositories/todo";

describe("MarkAsCompletedUseCase", () => {
  let sut: MarkAsCompletedUseCase;
  let toDoRepository: ToDoRepository;

  beforeEach(() => {
    toDoRepository = new ToDoRepositoryStub();
    sut = new MarkAsCompletedUseCase(toDoRepository);
  });

  it("should mark a ToDo item as completed", async () => {
    const TODO: ToDo = {
      id: 1,
      text: "Buy groceries",
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    jest.spyOn(toDoRepository, "markAsCompleted").mockResolvedValue({
      ...TODO,
      isCompleted: true,
      updatedAt: new Date()
    });

    const result = await sut.execute("1");

    expect(result).toEqual({
      ...TODO,
      isCompleted: true,
      updatedAt: expect.any(Date)
    });
    expect(toDoRepository.markAsCompleted).toHaveBeenCalledWith("1");
  });
});
