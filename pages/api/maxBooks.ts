import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@utils/connectDB'
import {get10Books, getMaxBooks} from '@/controllers/bookController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  switch (req.method) {
    case 'GET':
      await getMaxBooks(req, res);
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
