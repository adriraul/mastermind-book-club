// server/src/entities/Book.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Review } from "./Review";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  author!: string;

  @Column()
  pages!: number;

  @Column()
  description!: string;

  @Column()
  synopsis!: string;

  @Column({ type: "date" })
  date!: Date;

  @Column()
  recommendedBy!: string;

  @Column()
  rating!: number;

  @Column()
  imageUrl!: string;

  @OneToMany(() => Review, (review) => review.book)
  reviews!: Review[];
}