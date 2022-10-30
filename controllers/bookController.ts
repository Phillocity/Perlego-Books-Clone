import type { NextApiRequest, NextApiResponse } from "next";
import Book from "@models/bookModel";
import bookInterface from "@/types/bookType";


/* ---------------------------------------------------------------------------------------------- */
/*                    Retrieve 10 random books from the database                                  */
/* ---------------------------------------------------------------------------------------------- */
const get10Books = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const Books: bookInterface[] = await Book.aggregate([
      { $sample: { size: 10 } },
      { $project: { _id: 0, language: 0 } },
    ]);

    res.status(200).json(Books);
  } catch (error) {
    res.status(500).json({
      message: "Error getting random Books",
      error: error,
    });
  }
};

/* ---------------------------------------------------------------------------------------------- */
/*                                       Retrieve max 36 random Books                                       */
/* ---------------------------------------------------------------------------------------------- */
const getMaxBooks = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.query.secret !== process.env.SECRET_KEY)
      return res.status(401).json({ message: "Not Authorized" });

    const Books = await Book.aggregate([
      { $sample: { size: 36 } },
      { $project: { _id: 0, language: 0 } },
    ]);

    res.status(200).json(Books);

  } catch (error) {
    res.status(500).json({
      message: "Error getting all books",
      error: error,
    });
  }
};


export { get10Books, getMaxBooks };
