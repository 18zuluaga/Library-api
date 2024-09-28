import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
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

  @Get(':1')
  findById(@Param('id') id: string){
    return this.bookService.findById(+id)
  }

  @Patch(':1')
  update(@Param('id') id: string, @Body() UpdateBookDto: UpdateBookDto){
    return this.bookService.update(+id, UpdateBookDto)
  }

}
