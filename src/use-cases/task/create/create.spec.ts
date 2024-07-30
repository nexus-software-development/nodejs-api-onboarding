import { TaskRepository } from "@domain/repositories/task";
import { TaskRepositoryStub } from "../../../../tests/stubs/repositories/task";
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
    const textParam: string = "TestingText";

    await sut.create(textParam);

    expect(taskRepository.create).toHaveBeenCalledWith(textParam);
  });
});
