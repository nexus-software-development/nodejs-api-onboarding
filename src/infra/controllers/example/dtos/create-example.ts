import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateExampleDto {
  @ApiProperty({
    description: "Texto do Example"
  })
  @IsString()
  text: string;
}
