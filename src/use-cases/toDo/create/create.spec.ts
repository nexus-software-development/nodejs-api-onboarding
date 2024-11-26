import { IToDoRepository } from "@domain/repositories/toDoRepository";
import { ToDoRepositoryStub } from "@test/stubs/repositories/toDo";
import { CreateToDoUseCase } from ".";

describe("Create Example Use Case", () => {
  let sut: CreateToDoUseCase;
  let exampleRepository: IToDoRepository;

  beforeEach(() => {
    exampleRepository = new ToDoRepositoryStub();
    sut = new CreateToDoUseCase(exampleRepository);
  });

  it("should call a method that create an example", async () => {
    jest.spyOn(exampleRepository, "create");

    const TEXT = "text";

    await sut.create(TEXT);

    expect(exampleRepository.create).toHaveBeenCalledWith(TEXT);
  });
});
