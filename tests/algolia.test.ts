import algoliasearch from 'algoliasearch/lite';

// const ALGOLIA_APP_ID: string = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '';
// const ALGOLIA_API_KEY: string = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || '';
// const ALGOLIA_INDEX_NAME: string = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || '';

/* ---------------------------------------------------------------------------------------------- */
/*         Usually would keep the above in a .env file, but hardcoding for easy local testing     */
/* ---------------------------------------------------------------------------------------------- */

const ALGOLIA_APP_ID: string = "QUDL76XNT2";
const ALGOLIA_API_KEY: string = "196f81ff01633986dccc7341100a77c1"
const ALGOLIA_INDEX_NAME: string = "PERLEGO_INDEX"

const searchClient = algoliasearch(ALGOLIA_APP_ID!, ALGOLIA_API_KEY!);
const index = searchClient.initIndex(ALGOLIA_INDEX_NAME!);

describe('Algolia Search', () => {
  it('should return 36 books', async () => {
    const books = await index.search('', { hitsPerPage: 36 });
    expect(books.hits.length).toBe(36);
  });

  it('should return only books that are from the Art category', async () => {
    const books = await index.search('', { hitsPerPage: 100, filters: 'category:Art' });
    expect(books.hits.every((book: any) => book.category === 'Art')).toBe(true);
  });

  it('should return match even with typos', async () => {
    const books = await index.search('drawig lenard', { hitsPerPage: 100 });
    expect(books.hits.length).toBeGreaterThan(0);
  });

  it('should return match even with typos and filters', async () => {
    const books = await index.search('drawig lenard', { hitsPerPage: 100, filters: 'category:Art' });
    expect(books.hits.every((book: any) => book.category === 'Art')).toBe(true);
  });
});
