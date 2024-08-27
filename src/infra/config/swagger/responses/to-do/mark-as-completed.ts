import { applyDecorators, HttpStatus } from "@nestjs/common";
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOperation
} from "@nestjs/swagger";

export const MarkToDoAsCompletedResponse = applyDecorators(
  ApiOperation({
    description: "Marca um ToDo como completado"
  }),
  ApiCreatedResponse({
    description: "ToDo completado com sucesso!",
    status: HttpStatus.OK
  }),
  ApiConflictResponse({
    description: "Um ToDo foi encontrado com o mesmo texto",
    status: HttpStatus.CONFLICT
  })
);
