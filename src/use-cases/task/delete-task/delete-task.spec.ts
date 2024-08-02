import { TaskRepositoryStub } from "@test/stubs/repositories/task";
import { DeleteTaskUseCase } from ".";

describe("Delete Task UseCase", () => {
  let sut: DeleteTaskUseCase;
  let taskRepository: TaskRepositoryStub;

  beforeEach(() => {
    taskRepository = new TaskRepositoryStub();
    sut = new DeleteTaskUseCase(taskRepository);
  });

  it("should call a method that delete an task", async () => {
    jest.spyOn(taskRepository, "deleteTask");

    const ID: number = 97531;

    await sut.deleteTask(ID);

    expect(taskRepository.deleteTask).toHaveBeenCalledWith(ID);
  });
});
