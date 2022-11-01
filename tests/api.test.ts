import { describe, expect, test } from '@jest/globals';
import BookType from '@/types/bookType';
import getDomain from '@utils/domainName';
import axios from 'axios';

describe('Book Controller', () => {
  let response: any;
  beforeAll(() => {
    response = axios.get(`${getDomain()}/api/books`, {
      headers: {
        authorization: `Perlego${process.env.SECRET_KEY}`,
      },
    });
  });

  it('should return 36 books', async () => {
    const books = await response;
    expect(books.data.length).toBe(36);
  });

  it('should return unique books', async () => {
    const books = await response;
    const unique = new Set(books.data);
    expect(unique.size).toBe(books.data.length);
  });

  it('should return books with title, author, and image', async () => {
    const books = await response;
    books.data.forEach((book: BookType) => {
      expect(book.title).toBeTruthy();
      expect(book.author).toBeTruthy();
      expect(book.img).toBeTruthy();
    });
  });

  it('should return 200 status', async () => {
    const books = await axios.get(`${getDomain()}/api/books`, {
      headers: {
        authorization: `Berlego${process.env.SECRET_KEY}`,
      },
    });
    expect(books.status).toBe(200);
  });
});
