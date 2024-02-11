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
  presentationDate!: Date;

  @Column()
  label!: string;

  @Column({ default: false })
  outstanding!: Boolean;

  @Column()
  recommendedBy!: string;

  @Column("decimal", { precision: 3, scale: 1 })
  rating!: number;

  @Column()
  imageUrl!: string;

  @OneToMany(() => Review, (review) => review.book)
  reviews!: Review[];
}
