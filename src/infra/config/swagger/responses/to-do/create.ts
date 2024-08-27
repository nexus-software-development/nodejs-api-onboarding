import { applyDecorators, HttpStatus } from "@nestjs/common";
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOperation
} from "@nestjs/swagger";

export const CreateToDoResponse = applyDecorators(
  ApiOperation({
    description: "Cria um ToDo"
  }),
  ApiCreatedResponse({
    description: "ToDo criado com sucesso!",
    status: HttpStatus.CREATED
  }),
  ApiConflictResponse({
    description: "Um ToDo foi encontrado com o mesmo texto",
    status: HttpStatus.CONFLICT
  })
);
