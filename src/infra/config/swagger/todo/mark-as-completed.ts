import { ToDo } from "@domain/entities/todo";
import { applyDecorators } from "@nestjs/common";
import { ApiOkResponse, ApiProperty } from "@nestjs/swagger";

const TODO: ToDo = {
  id: 1,
  text: "Buy groceries",
  isCompleted: true,
  createdAt: new Date(),
  updatedAt: new Date()
};

export class MarkAsCompletedResponseDto {
  @ApiProperty({
    example: TODO
  })
  todo: ToDo;
}

export const MarkAsCompletedResponse = applyDecorators(
  ApiOkResponse({
    description: "The ToDo item has been marked as completed.",
    type: MarkAsCompletedResponseDto
  })
);
