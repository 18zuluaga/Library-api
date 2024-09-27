import { IsString, IsNotEmpty, IsDateString, IsEnum } from 'class-validator';
import { genre } from 'src/common/enum/genre.enum';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsDateString()
  date_of_publication: Date;

  @IsEnum(genre)
  genre: genre;
}
