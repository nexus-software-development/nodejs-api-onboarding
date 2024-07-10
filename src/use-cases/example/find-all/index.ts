import { Example } from "@domain/entities/example";
import { ExampleRepository } from "@domain/repositories/example";

export class FindAllExampleUseCase {
  constructor(private readonly exampleRepository: ExampleRepository) {}

  async findAll(): Promise<Example[]> {
    return this.exampleRepository.findAll()
  }
}
