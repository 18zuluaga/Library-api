import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll(){
    return this.bookService.findAll()
  }

  @Get(':id')
  findById(@Param('id') id: string){
    return this.bookService.findById(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateBookDto: UpdateBookDto){
    return this.bookService.update(+id, UpdateBookDto)
  }

  @Delete(':id')
  delete(@Param('id')id: string){
    return this.bookService.delete(+id)
  }
}
