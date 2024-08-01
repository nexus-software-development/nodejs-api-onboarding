import { TaskRepository } from "@domain/repositories/task";
import { TaskRepositoryStub } from "@test/stubs/repositories/task";
import { CreateTaskUseCase } from ".";
import { Task } from "@prisma/client";
import { ConflictException } from "@nestjs/common";

describe("Create Task UseCase", () => {
  let sut: CreateTaskUseCase;
  let taskRepository: TaskRepository;

  beforeEach(() => {
    taskRepository = new TaskRepositoryStub();
    sut = new CreateTaskUseCase(taskRepository);
  });

  const TEXT: string = "TestingText";

  it("should call a method that create an task", async () => {
    jest.spyOn(taskRepository, "create");

    await sut.create(TEXT);

    expect(taskRepository.create).toHaveBeenCalledWith(TEXT);
  });

  it("should throw ConflictException if task with the same text already exists", async () => {
    const TASK = {
      id: "0t1b2i3",
      text: TEXT
    } as unknown as Task;

    jest.spyOn(taskRepository, "findByText").mockResolvedValue(TASK);

    await expect(sut.create(TEXT)).rejects.toThrow(ConflictException); //Or: "Já existe uma Tarefa como essa"
  });
});
