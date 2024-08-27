import { ExampleRepository } from "@application/repositories/example";
import { FindAllExampleUseCase } from ".";
import { ExampleRepositoryStub } from "@test/stubs/repositories/example";
import { makeExample } from "@test/factories/entities/example";

describe("Hello World Example Use Case", () => {
  let sut: FindAllExampleUseCase;
  let exampleRepository: ExampleRepository;

  beforeEach(() => {
    exampleRepository = new ExampleRepositoryStub();
    sut = new FindAllExampleUseCase(exampleRepository);
  });

  it("should call a method that return a list of examples", async () => {
    const mockedExamples = [makeExample(), makeExample(), makeExample()];

    jest.spyOn(exampleRepository, "findAll").mockResolvedValue(mockedExamples);

    const result = await sut.findAll();

    expect(result).toStrictEqual({ examples: mockedExamples });
  });
});
