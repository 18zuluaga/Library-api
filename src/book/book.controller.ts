import {
  Controller,
  Post,
  Body,
  Get,
  Param,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

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

}
