import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsBoolean } from "class-validator";

export class CreateTodoDto {
  @ApiProperty({
    description: "Exemplo de tarefa"
  })
  @IsString()
  text: string;
  @IsBoolean()
  itsDone: boolean;
}
