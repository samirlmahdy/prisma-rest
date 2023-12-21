import {
  getAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getAuthorByID,
} from "../controllers/author.conroller";
import { Router } from "express";

const authorRouter = Router();

authorRouter.get("/", getAuthors);
authorRouter.get("/:id", getAuthorByID);
authorRouter.post("/", createAuthor);
authorRouter.put("/:id", updateAuthor);
authorRouter.delete("/:id", deleteAuthor);

export default authorRouter;
