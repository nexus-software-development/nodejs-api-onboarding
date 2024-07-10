import { ExampleRepository } from "@domain/repositories/example";
import { FindAllExampleUseCase } from ".";
import { ExampleRepositoryStub } from "@test/stubs/repositories/example";
import { Example } from "@domain/entities/example";

describe("Hello World Example Use Case", () => {
  let sut: FindAllExampleUseCase;
  let exampleRepository: ExampleRepository;

  beforeEach(() => {
    exampleRepository = new ExampleRepositoryStub();
    sut = new FindAllExampleUseCase(exampleRepository);
  });

  const EXAMPLE = { id: 123, text: "Texto" } as Example;
  const EXAMPLES = [EXAMPLE, EXAMPLE, EXAMPLE];

  it("should call a method that return a list of examples", async () => {
    jest.spyOn(exampleRepository, "findAll").mockResolvedValue(EXAMPLES);

    const result = await sut.findAll();

    expect(result).toStrictEqual({ examples: EXAMPLES });
  });
});
