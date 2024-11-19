import { ToDo } from "@domain/entities/todo";
import { applyDecorators } from "@nestjs/common";
import { ApiOkResponse, ApiProperty } from "@nestjs/swagger";

const TODO: ToDo = {
  id: 1,
  text: "Buy groceries",
  isCompleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
};

export class ToDoReturnDto {
  @ApiProperty({
    example: [TODO, TODO]
  })
  todos: ToDo[];
}

export const FindAllToDosResponses = applyDecorators(
  ApiOkResponse({
    description: "All ToDo items were found",
    type: ToDoReturnDto
  })
);
