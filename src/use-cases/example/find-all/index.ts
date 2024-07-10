import { Example } from "@domain/entities/example";
import { ExampleRepository } from "@domain/repositories/example";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindAllExampleUseCase {
  constructor(private readonly exampleRepository: ExampleRepository) { }

  async findAll(): Promise<{ examples: Example[] }> {
    const examples = await this.exampleRepository.findAll();

    return { examples }
  }
}
