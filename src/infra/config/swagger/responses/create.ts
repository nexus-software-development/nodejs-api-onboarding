import { applyDecorators } from "@nestjs/common";
import { ApiCreatedResponse } from "@nestjs/swagger";

export const CreateTaskResponse = applyDecorators(
  ApiCreatedResponse({
    description: "Task criado com sucesso!"
  })
);
