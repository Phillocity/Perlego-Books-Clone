import type { NextApiRequest, NextApiResponse } from 'next';
import Book from '@models/bookModel';
import BookType from '@/types/bookType';

/* ---------------------------------------------------------------------------------------------- */
/*                                       Retrieve max 36 random Books                             */
/* ---------------------------------------------------------------------------------------------- */
const getMaxBooks = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const Books: BookType[] = await Book.aggregate([{ $sample: { size: 36 } }]);
    res.status(200).json(Books);
  } catch (error) {
    res.status(500).json({
      message: 'Error getting all books',
      error: error,
    });
  }
};

/* ---------------------------------------------------------------------------------------------- */
/*                         Retrieve random books up to the specified limit                        */
/* ---------------------------------------------------------------------------------------------- */
const getNthBooks = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { limit } = req.query;
    const Books: BookType[] = await Book.aggregate([{ $sample: { size: Number(limit) } }]);
    res.status(200).json(Books);
  } catch (error) {
    res.status(500).json({
      message: 'Error getting all books',
      error: error,
    });
  }
};

/* ------------------------- Additional controls for CRUD extension ------------------------- */

const addBook = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const book: BookType = req.body;
    const newBook = await Book.create(book);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({
      message: 'Error adding book',
      error: error,
    });
  }
};

const updateBook = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const book: BookType = req.body;
    const updatedBook = await Book.findByIdAndUpdate(book._id, book, { new: true });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({
      message: 'Error updating book',
      error: error,
    });
  }
};

const deleteBook = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const deletedBook = await Book.findByIdAndDelete(id);
    res.status(200).json(deletedBook);
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting book',
      error: error,
    });
  }
};

export { getMaxBooks, getNthBooks, addBook, updateBook, deleteBook };
