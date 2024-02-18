// server/src/server.ts

import express, { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { Book } from "./entities/Book";
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
          relations: ["reviews"],
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

    app.get("/getOutstandingBooks", async (req: Request, res: Response) => {
      try {
        const books = await AppDataSource.manager.find(Book, {
          where: { outstanding: true },
          relations: ["reviews"],
        });
        res.json(books);
      } catch (error) {
        console.error("Error al obtener libros:", error);
        res.status(500).json({ error: "Error interno del servidor" });
      }
    });

    console.log(`Servidor escuchando en el puerto ${PORT}`);
  } catch (error) {
    console.error("Error de conexión con la base de datos:", error);
  }
});
