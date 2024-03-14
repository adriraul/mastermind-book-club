// server/src/server.ts

import express, { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { Book } from "./entities/Book";
import { Member } from "./entities/Member";
import { Category } from "./entities/Category";
import { Review } from "./entities/Review";

import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.listen(PORT, async () => {
  try {
    await AppDataSource.initialize();
    console.log("Conexión exitosa con la base de datos");

    app.get("/getBooks", async (req: Request, res: Response) => {
      try {
        const books = await AppDataSource.manager.find(Book, {
          relations: ["reviews", "recommendedBy"],
          order: {
            presentationDate: "DESC",
          },
        });
        res.json(books);
      } catch (error) {
        console.error("Error al obtener libros:", error);
        res.status(500).json({ error: "Error interno del servidor" });
      }
    });

    app.get("/getBookById/:id", async (req: Request, res: Response) => {
      try {
        const bookId = parseInt(req.params.id);
        const book = await AppDataSource.manager.findOne(Book, {
          where: { id: bookId },
          relations: ["reviews", "recommendedBy", "reviews.category"],
        });

        if (!book) {
          return res.status(404).json({ error: "Libro no encontrado" });
        }

        res.json(book);
      } catch (error) {
        console.error("Error al obtener libro por ID:", error);
        res.status(500).json({ error: "Error interno del servidor" });
      }
    });

    app.get("/getOutstandingBooks", async (req: Request, res: Response) => {
      try {
        const books = await AppDataSource.manager.find(Book, {
          where: { outstanding: true },
          relations: ["recommendedBy"],
        });
        res.json(books);
      } catch (error) {
        console.error("Error al obtener libros:", error);
        res.status(500).json({ error: "Error interno del servidor" });
      }
    });

    app.get("/getMembers", async (req: Request, res: Response) => {
      try {
        const members = await AppDataSource.manager.find(Member);
        res.json(members);
      } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
      }
    });

    app.get("/getCategories", async (req: Request, res: Response) => {
      try {
        const categories = await AppDataSource.manager.find(Category);
        res.json(categories);
      } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
      }
    });

    app.post("/category", async (req: Request, res: Response) => {
      try {
        const { name, description } = req.body;

        const newCategory = new Category();
        newCategory.name = name;
        newCategory.description = description;
        AppDataSource.manager.save(Category, newCategory);

        res.status(201).json(newCategory);
      } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    app.post("/book", async (req: Request, res: Response) => {
      try {
        const {
          title,
          author,
          pages,
          description,
          synopsis,
          presentationDate,
          label,
          outstanding,
          imageUrl,
        } = req.body;

        const memberId = parseInt(req.body.recommendedBy);
        const member = await AppDataSource.manager.findOne(Member, {
          where: { id: memberId },
        });

        if (!member) {
          return res
            .status(400)
            .json({ error: "Invalid member, book, or category ID" });
        }

        const newBook = new Book();
        newBook.title = title;
        newBook.author = author;
        newBook.pages = pages;
        newBook.description = description;
        newBook.synopsis = synopsis;
        newBook.presentationDate = new Date(presentationDate);
        newBook.label = label;
        newBook.outstanding = outstanding;
        newBook.recommendedBy = member;
        newBook.rating = 0.0;
        newBook.imageUrl = imageUrl;

        await AppDataSource.manager.save(Book, newBook);

        res.status(201).json(newBook);
      } catch (error) {
        console.error("Error creating book:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    app.post("/review", async (req: Request, res: Response) => {
      try {
        const { description, rating } = req.body;

        const memberId = parseInt(req.body.memberId);
        const bookId = parseInt(req.body.bookId);
        const categoryId = parseInt(req.body.categoryId);

        const member = await AppDataSource.manager.findOne(Member, {
          where: { id: memberId },
        });
        const book = await AppDataSource.manager.findOne(Book, {
          where: { id: bookId },
        });
        const category = await AppDataSource.manager.findOne(Category, {
          where: { id: categoryId },
        });

        if (!member || !book || !category) {
          return res
            .status(400)
            .json({ error: "Invalid member, book, or category ID" });
        }

        const newReview = new Review();
        newReview.member = member;
        newReview.description = description;
        newReview.rating = rating;
        newReview.book = book;
        newReview.category = category;

        await AppDataSource.manager.save(Review, newReview);
        await updateBookRating(book, rating);

        res.status(201).json(newReview);
      } catch (error) {
        console.error("Error creating review:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    const updateBookRating = async (book: Book, rating: number) => {
      try {
        const reviews = await AppDataSource.manager.find(Review, {
          where: { book },
          relations: ["book"],
        });

        let totalRating = 0;
        for (const review of reviews) {
          const ratingValue = Number(review.rating);
          totalRating += ratingValue;
        }
        const averageRating = totalRating / reviews.length;
        const roundedRating = parseFloat(averageRating.toFixed(2));

        book.rating = roundedRating;

        await AppDataSource.manager.save(Book, book);
      } catch (error) {
        console.error("Error updating book rating:", error);
        throw error;
      }
    };

    console.log(`Servidor escuchando en el puerto ${PORT}`);
  } catch (error) {
    console.error("Error de conexión con la base de datos:", error);
  }
});
