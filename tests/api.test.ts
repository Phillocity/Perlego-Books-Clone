import { describe, expect } from '@jest/globals';
import { getDomain } from '@utils/domainName';
import BookType from '@/types/bookType';
import axios from 'axios';

describe('Book Controller', () => {
  let response: any;
  beforeAll(() => {
    response = axios.get(`${getDomain()}api/books`, {
      headers: {
        authorization: `Perlego636D7B8896E513F83E62CA367BB6E`,
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

  it('should return books equal to the amount given in the request limit', async () => {
    const limit = 10;
    const books = await axios.get(`${getDomain()}api/books?limit=${limit}`, {
      headers: {
        authorization: `Perlego636D7B8896E513F83E62CA367BB6E`,
      },
    });
    expect(books.data.length).toBe(limit);
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
    const books = await axios.get(`${getDomain()}api/books`, {
      headers: {
        authorization: `Perlego636D7B8896E513F83E62CA367BB6E`,
      },
    });
    expect(books.status).toBe(200);
  });
});
