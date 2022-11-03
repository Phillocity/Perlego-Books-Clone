import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@utils/connectDB';
import { getMaxBooks, getNthBooks, addBook, updateBook, deleteBook } from '@controllers/bookController';
import isAuthorised from '@/utils/secretAuth';

export default async function maxBooks(req: NextApiRequest, res: NextApiResponse) {
  /* ---------------------------------------------------------------------------------------------- */
  /*           Checks if there's any auth otherwise return 401, unless in development env           */
  /* ---------------------------------------------------------------------------------------------- */
  const auth: string | undefined = req.headers.authorization;

  if (!isAuthorised(auth)) {
    return res.status(401).json({ message: 'Not authorized' });
  } else {
    await connectDB();
    switch (req.method) {
      case 'GET':
        if (req.query.limit) {
          await getNthBooks(req, res);
        } else {
          await getMaxBooks(req, res);
        }
        break;
      case 'POST':
        await addBook(req, res);
        break;
      case 'PUT':
        await updateBook(req, res);
        break;
      case 'DELETE':
        await deleteBook(req, res);
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  }
}
