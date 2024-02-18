import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Book } from "./Book";
import { Rating } from "./Rating";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  user!: string;

  @Column()
  description!: string;

  @Column()
  rating!: number;

  @ManyToOne(() => Book, (book) => book.reviews)
  book!: Book;

  @ManyToOne(() => Rating, (rating) => rating.reviews)
  ratingDetails!: Rating;
}
