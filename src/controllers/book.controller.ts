import { PrismaClient } from "@prisma/client";

const bookClient = new PrismaClient().book;

// get all books

export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await bookClient.findMany();

    res.status(200).json({ data: allBooks });
  } catch (error) {
    console.log(error);
  }
};

// get book by id

export const getBookById = async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = await bookClient.findUnique({
      where: {
        id: bookId,
      },
      include: {
        Author: true,
      },
    });
    res.status(200).json({ data: book });
  } catch (error) {
    console.log(error);
  }
};

// create new book

export const createBook = async (req, res) => {
  const bookData = req.body;

  try {
    const book = await bookClient.create({
      data: bookData,
    });

    res.status(201).json({ data: book });
  } catch (error) {
    console.log(error);
  }
};

// update book

export const updateBook = async (req, res) => {
  const bookId = req.params.id;
  const bookData = req.body;
  try {
    const book = await bookClient.update({
      where: {
        id: bookId,
      },
      data: bookData,
    });

    res.status(200).json({ data: book });
  } catch (error) {
    console.log(error);
  }
};

// delete book

export const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await bookClient.delete({
      where: {
        id: bookId,
      },
    });
    res.status(200).json({ data: book });
  } catch (error) {
    console.log(error);
  }
};
