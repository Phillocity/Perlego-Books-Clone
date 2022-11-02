import type { NextApiRequest, NextApiResponse } from 'next';
import Book from '@models/bookModel';
import BookType from '@/types/bookType';

/* ---------------------------------------------------------------------------------------------- */
/*                    Retrieve 10 random books from the database                                  */
/* ---------------------------------------------------------------------------------------------- */
const get10Books = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const Books: BookType[] = await Book.aggregate([{ $sample: { size: 10 } }, { $project: { language: 0 } }]);

    res.status(200).json(Books);
  } catch (error) {
    res.status(500).json({
      message: 'Error getting random Books',
      error: error,
    });
  }
};

/* ---------------------------------------------------------------------------------------------- */
/*                                       Retrieve max 36 random Books                             */
/* ---------------------------------------------------------------------------------------------- */
const getMaxBooks = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const Books: BookType[] = await Book.aggregate([{ $sample: { size: 36 } }, { $project: { language: 0 } }]);

    res.status(200).json(Books);
  } catch (error) {
    res.status(500).json({
      message: 'Error getting all books',
      error: error,
    });
  }
};

const getNthBooks = async (req: NextApiRequest, res: NextApiResponse) => {
  try {

  } catch (error) {
    res.status(500).json({
      message: 'Error getting all books',
      error: error,
    });
  }
};

export { get10Books, getMaxBooks };
