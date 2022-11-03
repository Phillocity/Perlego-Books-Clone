import type { NextApiRequest, NextApiResponse } from 'next';
import List from '@models/listModel';
import BookType from '@/types/bookType';
import ListType from '@/types/listType';

/* ---------------------------------------------------------------------------------------------- */
/*           Made for the creation of "Reading Lists" where we store book models inside.          */
/*            This is a one-to-many relationship, but stored in a NoSQL format.                   */
/*                                    Unfinished feature.                                         */
/* ---------------------------------------------------------------------------------------------- */



/* ---------------------------------------------------------------------------------------------- */
/*                    Retrieve List from the database                                              */
/* ---------------------------------------------------------------------------------------------- */
const getAllList = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const list: BookType[] = await List.find({});
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({
      message: 'Error getting books from list',
      error: error,
    });
  }
};

/* ---------------------------------------------------------------------------------------------- */
/*                                        Add book to list                                        */
/* ---------------------------------------------------------------------------------------------- */
const addBookToList = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { bookId } = req.body;
    const list: ListType[] = await List.find({});
    const book = list[0].items.find(book => book._id == bookId);
    if (book) {
      res.status(200).json({ message: 'Book already in list' });
    } else {
      const newList = await List.findOneAndUpdate({}, { $push: { items: bookId } }, { new: true });
      res.status(200).json(newList);
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error adding book to list',
      error: error,
    });
  }
};

/* ---------------------------------------------------------------------------------------------- */
/*                                      Delete book from list                                     */
/* ---------------------------------------------------------------------------------------------- */

const deleteBookFromList = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { bookId } = req.body;
    const newList = await List.findOneAndUpdate({}, { $pull: { items: bookId } }, { new: true });
    res.status(200).json(newList);
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting book from list',
      error: error,
    });
  }
};
