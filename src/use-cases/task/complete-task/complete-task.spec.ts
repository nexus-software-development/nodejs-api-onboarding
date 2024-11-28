import { TaskRepositoryStub } from "@test/stubs/repositories/task";
import { CompleteTaskUseCase } from ".";
import { ITaskRepository } from "@domain/repositories/taskRepository";

describe("Complete Task Use Case", () => {
  let sut: CompleteTaskUseCase;
  let taskRepository: ITaskRepository;

  beforeEach(() => {
    taskRepository = new TaskRepositoryStub();
    sut = new CompleteTaskUseCase(taskRepository);
  });

  it("should call a method that complete an task", async () => {
    jest.spyOn(taskRepository, "completeTask");

    const ID = 1;

    await sut.completeTask(ID);

    expect(taskRepository.completeTask).toHaveBeenCalledWith(ID);
  });
});
