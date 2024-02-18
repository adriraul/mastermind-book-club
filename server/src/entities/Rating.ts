import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Review } from "./Review";

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  score!: number;

  @OneToMany(() => Review, (review) => review.ratingDetails)
  reviews!: Review[];
}
