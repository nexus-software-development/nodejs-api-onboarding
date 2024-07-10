import { ExampleRepository } from "@domain/repositories/example";
import { ExampleRepositoryStub } from "@test/stubs/repositories/example";
import { CreateExampleUseCase } from ".";

describe("Create Example Use Case", () => {
  let sut: CreateExampleUseCase;
  let exampleRepository: ExampleRepository;

  beforeEach(() => {
    exampleRepository = new ExampleRepositoryStub();
    sut = new CreateExampleUseCase(exampleRepository);
  });

  it("should call a method that create an example", async() => {
    jest.spyOn(exampleRepository, "create");

    const TEXT = "text";

    await sut.create(TEXT);

    expect(exampleRepository.create).toHaveBeenCalledWith(TEXT);
  });
});
