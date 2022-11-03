import { GetServerSideProps } from 'next';
import { useState } from 'react';
import BookType from '@/types/bookType';
import Layout from '@/components/layout';
import BookGrid from '@/components/bookGrid';
import NavBar from '@/components/navBar';
import { RefreshButton } from '@/components/button';
import Search from '@/components/search';
import BookRecommend from '@/components/booksRecommend';
import { fetchData } from '@utils/fetcher';

/* ---------------------------------------------------------------------------------------------- */
/*                        Initial data fetching to return data from server                        */
/* ---------------------------------------------------------------------------------------------- */
export const getServerSideProps: GetServerSideProps = async () => {
  const books = await fetchData('books');
  return {
    props: { books },
  };
};

export default function BookRecommendations({ books }: { books: BookType[] }) {
  const [bookList, setBookList] = useState(books);

  const refreshData = async () => {
    const newBooks = await fetchData('books');
    setBookList(newBooks);
  };

  return (
    <>
      <Layout>
        <NavBar />
        <Search />
        <BookGrid>
          <hr className="w-75 m-5" />
          <div className="d-flex justify-content-between flex-grow-1 w-100 flex-row mb-5">
            <h1 className="m-0">Books you may like</h1>
            <div className="h-100" onClick={refreshData}>
              <RefreshButton />
            </div>
          </div>
          <BookRecommend bookList={bookList} />
        </BookGrid>
      </Layout>
    </>
  );
}
