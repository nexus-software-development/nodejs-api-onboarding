import { TaskRepository } from "@domain/repositories/task";
import { TaskRepositoryStub } from "@test/stubs/repositories/task";
import { CreateTaskUseCase } from ".";

describe("Create Task UseCase", () => {
  let sut: CreateTaskUseCase;
  let taskRepository: TaskRepository;

  beforeEach(() => {
    taskRepository = new TaskRepositoryStub();
    sut = new CreateTaskUseCase(taskRepository);
  });

  it("should call a method that create an task", async () => {
    jest.spyOn(taskRepository, "create");
    const TEXT: string = "TestingText";

    await sut.create(TEXT);

    expect(taskRepository.create).toHaveBeenCalledWith(TEXT);
  });
});
