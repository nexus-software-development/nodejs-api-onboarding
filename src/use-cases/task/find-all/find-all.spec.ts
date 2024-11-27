import { ITaskRepository } from "@domain/repositories/taskRepository";
import { FindAllTasksUseCase } from ".";
import { TaskRepositoryStub } from "@test/stubs/repositories/task";
import { TaskEntity } from "@domain/entities/taskEntity";

describe("Find all tasks Use Case", () => {
  let sut: FindAllTasksUseCase;
  let exampleRepository: ITaskRepository;

  beforeEach(() => {
    exampleRepository = new TaskRepositoryStub();
    sut = new FindAllTasksUseCase(exampleRepository);
  });

  const task = {
    id: 123,
    taskDescription: "Texto"
  } as TaskEntity;
  const tasks = [task, task, task];

  it("should call a method that return a list of examples", async () => {
    jest.spyOn(exampleRepository, "findAll").mockResolvedValue(tasks);

    const result = await sut.findAll();

    expect(result).toStrictEqual({ task: tasks });
  });
});
