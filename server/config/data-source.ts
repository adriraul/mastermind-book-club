import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Book } from "../src/entities/Book";
import { Review } from "../src/entities/Review";
import { Category } from "../src/entities/Category";
import { Member } from "../src/entities/Member";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "mastermind-book-club-database",
  synchronize: true,
  logging: false,
  entities: [Book, Review, Category, Member],
  migrations: [],
  migrationsTableName: "migrations",
  subscribers: [],
});
