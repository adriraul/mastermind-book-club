import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Book } from "./Book";
import { Category } from "./Category";
import { Member } from "./Member";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;

  @Column("numeric", { precision: 5, scale: 2 })
  rating!: number;

  @ManyToOne(() => Book, (book) => book.reviews)
  book!: Book;

  @ManyToOne(() => Category)
  category!: Category;

  @ManyToOne(() => Member, (member) => member.reviews)
  member!: Member;
}
