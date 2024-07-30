import { Task } from "@domain/entities/task";
import { TaskRepository } from "@domain/repositories/task";
import { TaskRepositoryStub } from "../../../../tests/stubs/repositories/task";
import { FindAllTaskUseCase } from ".";

describe("Find All Tasks UseCase", () => {
  let sut: FindAllTaskUseCase;
  let taskRepository: TaskRepository;

  beforeEach(() => {
    taskRepository = new TaskRepositoryStub();
    sut = new FindAllTaskUseCase(taskRepository);
  });

  const task = {
    id: "0t1b2i3",
    text: "TEXT"
  } as Task;

  const tasks: Task[] = [task, task, task, task];

  it("should call a method that return a list of tasks", async () => {
    jest.spyOn(taskRepository, "findAll").mockResolvedValue(tasks);

    const res = await sut.findAll();

    expect(res).toStrictEqual({ tasks });
  });
});
