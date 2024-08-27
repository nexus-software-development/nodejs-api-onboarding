import { ToDo } from "@domain/entities/to-do";
import { applyDecorators, HttpStatus } from "@nestjs/common";
import {
  ApiOkResponse,
  ApiOperation,
  ApiProperty,
  ApiQuery
} from "@nestjs/swagger";

const TO_DO: ToDo = {
  id: 1,
  text: "Texto",
  isCompleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
};

export class AllToDosReturnDto {
  @ApiProperty({
    example: [TO_DO, TO_DO]
  })
  toDos: ToDo[];
}

export const FindAllToDosResponses = applyDecorators(
  ApiOperation({
    description: "Lista todos os ToDos anteriormente registrados"
  }),
  ApiOkResponse({
    description: "Todos os ToDos foram encontrados",
    type: AllToDosReturnDto,
    status: HttpStatus.OK
  }),
  ApiQuery({
    name: "text",
    required: false,
    type: String,
    description: "Texto para filtrar os ToDos (opcional)"
  })
);
