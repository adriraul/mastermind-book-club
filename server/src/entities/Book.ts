import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Review } from "./Review";
import { Member } from "./Member";

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

  @ManyToOne(() => Member)
  recommendedBy!: Member;

  @Column("numeric", { precision: 3, scale: 1 })
  rating!: number;

  @Column()
  imageUrl!: string;

  @OneToMany(() => Review, (review) => review.book)
  reviews!: Review[];
}
