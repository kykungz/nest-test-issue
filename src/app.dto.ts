import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class BaseDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}

export class PartialDto extends PartialType(BaseDto) {}
