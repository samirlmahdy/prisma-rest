import { PrismaClient } from "@prisma/client";

const authorClient = new PrismaClient().author;
// get all Authors

export const getAuthors = async (req, res) => {
  try {
    const allAuthors = await authorClient.findMany({
      include: {
        books: true,
      },
    });

    res.status(200).json({ data: allAuthors });
  } catch (error) {
    console.log(error);
  }
};

// get Author by id

export const getAuthorByID = async (req, res) => {
  const authorId = req.params.id;
  try {
    const author = authorClient.findUnique({
      where: {
        id: authorId,
      },
      include: {
        books: true,
      },
    });

    res.status(200).json({ data: author });
  } catch (error) {
    console.log(error);
  }
};

// create Author

export const createAuthor = async (req, res) => {
  try {
    const authorData = req.body;
    const author = await authorClient.create({
      data: authorData,
    });
    res.status(201).json({ data: author });
  } catch (error) {
    console.log(error);
  }
};

// update Author

export const updateAuthor = async (req, res) => {
  const authorId = req.params.id;
  const authorData = req.body;
  try {
    const author = await authorClient.update({
      where: {
        id: authorId,
      },
      data: authorData,
    });
    res.status(200).json({ data: author });
  } catch (error) {
    console.log(error);
  }
};

// delete Author

export const deleteAuthor = async (req, res) => {
  const authorId = req.params.id;
  try {
    const author = await authorClient.delete({
      where: {
        id: authorId,
      },
    });

    res.status(200).json({ data: author });
  } catch (error) {
    console.log(error);
  }
};
