import express from "express";
import authorRouter from "./routes/author.router";
import bookRouter from "./routes/book.router";

const app = express();
const PORT = 8080;
app.use(express.json());

app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.listen(PORT, () => {
  try {
    console.log(`Server is running on port ${PORT}`);
  } catch (e) {
    console.error(e);
  }
});
