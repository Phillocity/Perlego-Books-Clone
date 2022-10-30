import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@utils/connectDB';
import { get10Books, getMaxBooks } from '@/controllers/bookController';
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
        await getMaxBooks(req, res);
        break;
      case 'POST':
        break;
      case 'PUT':
        break;
      case 'DELETE':
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  }
}
