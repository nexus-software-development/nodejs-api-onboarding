import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateToDoDto {
  @ApiProperty({
    description: "Texto do ToDo"
  })
  @IsString()
  text: string;
}
