import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTaskDTO {
  @ApiProperty({
    description: "Texto da Tarefa."
  })
  @IsString()
  text: string;
}
