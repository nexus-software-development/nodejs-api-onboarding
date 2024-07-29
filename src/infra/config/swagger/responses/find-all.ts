import { Example } from "@domain/entities/example";
import { Todo } from "@domain/entities/todo";
import { applyDecorators } from "@nestjs/common";
import { ApiOkResponse, ApiProperty } from "@nestjs/swagger";

const EXAMPLE: Example = {
  id: 1,
  text: "Texto",
  createdAt: new Date(),
  updatedAt: new Date()
};

const TODO: Todo = {
  id: 1,
  text: "Tarefa 1",
  itsDone: false,
  createdAt: new Date(),
  updatedAt: new Date()
};

export class ExampleReturnDto {
  @ApiProperty({
    example: [EXAMPLE, EXAMPLE]
  })
  examples: Example[];
}

export class TodoReturnDto {
  @ApiProperty({
    example: [TODO, TODO]
  })
  todos: Todo[];
}

export const FindAllExampleResponses = applyDecorators(
  ApiOkResponse({
    description: "Todas os exemplos foram encontrados",
    type: ExampleReturnDto
  })
);

export const FindAllTodoResponses = applyDecorators(
  ApiOkResponse({
    description: "Todas as tarefas foram encontradas!",
    type: TodoReturnDto
  })
);
