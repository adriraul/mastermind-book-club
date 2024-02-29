import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Review } from "./Review";

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  surnames!: string;

  @Column()
  alias!: string;

  @OneToMany(() => Review, (review) => review.member)
  reviews!: Review[];
}
