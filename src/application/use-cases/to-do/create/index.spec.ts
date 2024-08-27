import { ToDoRepository } from "@application/repositories/to-do";
import { CreateToDoUseCase } from ".";
import { ToDoRepositoryStub } from "@test/stubs/repositories/to-do";

describe("Create ToDo Use Case", () => {
  let sut: CreateToDoUseCase;
  let toDoRepository: ToDoRepository;

  beforeEach(() => {
    toDoRepository = new ToDoRepositoryStub();
    sut = new CreateToDoUseCase(toDoRepository);
  });

  it("should be defined", () => {
    expect(sut).toBeDefined();
    expect(toDoRepository).toBeDefined();
  });

  it("should call repository .create method", async () => {
    jest.spyOn(toDoRepository, "create");

    const text = "Just a random text";

    await sut.create(text);

    expect(toDoRepository.create).toHaveBeenNthCalledWith(1, text);
  });
});
