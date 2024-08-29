import { Test } from "@nestjs/testing";
import { CreateToDoUseCase } from "@application/use-cases/to-do/create";
import { FindAllToDosUseCase } from "@application/use-cases/to-do/find-all";
import { MarkToDoAsCompletedUseCase } from "@application/use-cases/to-do/mark-as-completed";
import { ToDoController } from ".";
import { ConflictException } from "@nestjs/common";

describe("ToDo Controller", () => {
  let createToDoUseCase: CreateToDoUseCase;
  let findAllToDosUseCase: FindAllToDosUseCase;
  let markToDoAsCompletedUseCase: MarkToDoAsCompletedUseCase;
  let controller: ToDoController;

  beforeEach(async () => {
    const testingModule = await Test.createTestingModule({
      controllers: [ToDoController],
      providers: [
        {
          provide: CreateToDoUseCase,
          useValue: {
            create: jest.fn()
          }
        },
        {
          provide: FindAllToDosUseCase,
          useValue: {
            findAll: jest.fn()
          }
        },
        {
          provide: MarkToDoAsCompletedUseCase,
          useValue: {
            markToDoAsCompleted: jest.fn()
          }
        }
      ]
    }).compile();

    createToDoUseCase = testingModule.get<CreateToDoUseCase>(CreateToDoUseCase);
    findAllToDosUseCase =
      testingModule.get<FindAllToDosUseCase>(FindAllToDosUseCase);
    markToDoAsCompletedUseCase = testingModule.get<MarkToDoAsCompletedUseCase>(
      MarkToDoAsCompletedUseCase
    );
    controller = testingModule.get<ToDoController>(ToDoController);
  });

  it("should be defined", () => {
    expect(createToDoUseCase).toBeDefined();
    expect(findAllToDosUseCase).toBeDefined();
    expect(markToDoAsCompletedUseCase).toBeDefined();
    expect(controller).toBeDefined();
  });

  describe("X POST /todo", () => {
    it("should throw a ConflictException if a ToDo already exists with given text", async () => {
      const msg = "A ToDo has already been created with given text.";

      jest
        .spyOn(createToDoUseCase, "create")
        .mockRejectedValueOnce(new ConflictException(msg));

      const promise = controller.create({ text: "My ToDo" });

      await expect(promise).rejects.toBeInstanceOf(ConflictException);
      await expect(promise).rejects.toThrow(msg);
      expect(createToDoUseCase.create).toHaveBeenCalledWith("My ToDo");
    });

    it("should call use case with correct arguments", async () => {
      await controller.create({ text: "My ToDo" });

      expect(createToDoUseCase.create).toHaveBeenCalledWith("My ToDo");
    });
  });
});
