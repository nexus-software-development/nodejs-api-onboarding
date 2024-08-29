import { Test } from "@nestjs/testing";
import { CreateToDoUseCase } from "@application/use-cases/to-do/create";
import { FindAllToDosUseCase } from "@application/use-cases/to-do/find-all";
import { MarkToDoAsCompletedUseCase } from "@application/use-cases/to-do/mark-as-completed";
import { ToDoController } from ".";
import { ConflictException, NotFoundException } from "@nestjs/common";
import { ToDo } from "@domain/entities/to-do";
import { faker } from "@faker-js/faker";

function makeToDo(props?: Partial<ToDo>): ToDo {
  return {
    id: props?.id ?? faker.number.int(),
    text: props?.text ?? faker.lorem.text(),
    isCompleted: props?.isCompleted ?? faker.datatype.boolean(),
    createdAt: props?.createdAt ?? new Date(),
    updatedAt: props?.updatedAt ?? faker.date.future()
  };
}

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

  describe("X GET /todo", () => {
    it("should return an empty array if no ToDos were found", async () => {
      jest.spyOn(findAllToDosUseCase, "findAll").mockResolvedValueOnce({
        toDos: []
      });

      const { toDos } = await controller.findAll();

      expect(findAllToDosUseCase.findAll).toHaveBeenCalledWith(undefined);
      expect(toDos).toEqual([]);
    });

    it("should return all ToDos previously created", async () => {
      const mockedToDos: ToDo[] = [
        makeToDo(),
        makeToDo(),
        makeToDo(),
        makeToDo()
      ];

      jest.spyOn(findAllToDosUseCase, "findAll").mockResolvedValueOnce({
        toDos: mockedToDos
      });

      const { toDos } = await controller.findAll();

      expect(findAllToDosUseCase.findAll).toHaveBeenCalledWith(undefined);
      expect(toDos).toStrictEqual(mockedToDos);
    });
  });

  describe("X PATCH /todo/:id", () => {
    it("should throw a NotFoundException if no ToDo is found with given id", async () => {
      const id = 123;
      const msg = `No ToDo was found with ID "${id}".`;

      jest
        .spyOn(markToDoAsCompletedUseCase, "markToDoAsCompleted")
        .mockRejectedValueOnce(new NotFoundException(msg));

      const promise = controller.markToDoAsCompleted(id);

      await expect(promise).rejects.toBeInstanceOf(NotFoundException);
      await expect(promise).rejects.toThrow(msg);
      expect(
        markToDoAsCompletedUseCase.markToDoAsCompleted
      ).toHaveBeenCalledWith(id);
    });

    it("should mark a ToDo as completed", async () => {
      const id = 456;

      await controller.markToDoAsCompleted(id);

      expect(
        markToDoAsCompletedUseCase.markToDoAsCompleted
      ).toHaveBeenCalledWith(id);
    });
  });
});