import { genre } from 'src/common/enum/genre.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column({ type: 'date' })
    date_of_publication: Date;

    @Column()
    genre: genre
}
