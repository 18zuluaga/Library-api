import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    try {
      return await this.bookRepository.save(createBookDto);
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<Book[]> {
    try {
      const books = await this.bookRepository.find();
      if (books.length === 0) {
        throw new NotFoundException('No books were found');
      }
      return books;
    } catch (error) {
      throw new InternalServerErrorException('An error occurred while fetching books');
    }
  }

  async findById(id: number): Promise<Book> {
    try {
      const book = await this.bookRepository.findOneBy({ id });
      if (!book) {
        throw new NotFoundException(`Book with ID ${id} not found`);
      }
      return book;
    } catch (error) {
      throw new InternalServerErrorException('An error occurred while fetching the book');
    }
  }
}
