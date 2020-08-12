import { Controller, Patch, Post, Body } from '@nestjs/common';
import { BaseDto, PartialDto } from './app.dto';

@Controller()
export class AppController {
  @Post()
  createItem(@Body() body: BaseDto): string {
    return 'created';
  }

  @Patch()
  updateItem(@Body() body: PartialDto): string {
    return 'updated';
  }
}
