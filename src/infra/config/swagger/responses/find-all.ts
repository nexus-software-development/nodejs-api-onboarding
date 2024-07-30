import { Example } from "@domain/entities/example";
import { applyDecorators } from "@nestjs/common";
import { ApiOkResponse, ApiProperty } from "@nestjs/swagger";

const EXAMPLE: Example = {
  id: 1,
  text: "Texto",
  createdAt: new Date(),
  updatedAt: new Date()
};

export class ExampleReturnDto {
  @ApiProperty({
    example: [EXAMPLE, EXAMPLE]
  })
  examples: Example[];
}

export const FindAllExampleResponses = applyDecorators(
  ApiOkResponse({
    description: "Todas os exemplos foram encontrados",
    type: ExampleReturnDto
  })
);
