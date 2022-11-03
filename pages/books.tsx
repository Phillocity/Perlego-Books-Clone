import { GetStaticProps, InferGetStaticPropsType } from 'next';
import BookType from '@/types/bookType';
import Book from '@/components/bookCard';
import Layout from '@/components/layout';
import BookGrid from '@/components/bookGrid';
import NavBar from '@/components/navBar';
import { useState } from 'react';
import { RefreshButton } from '@/components/button';
import { fetchData } from '@utils/fetcher';

/* ---------------------------------------------------------------------------------------------- */
/*                        Initial data fetching to return data from server                        */
/* ---------------------------------------------------------------------------------------------- */
export const getServerSideProps: GetStaticProps = async () => {
  const books = await fetchData('books');

  return {
    props: { books },
  };
};

export default function BookRecommend({ books }: InferGetStaticPropsType<typeof getServerSideProps>) {
  const [bookList, setBookList] = useState<BookType[]>(books);

  const refreshData = async () => {
    const newBooks = await fetchData('books');
    setBookList(newBooks);
  };

  return (
    <>
      <Layout>
        <NavBar />
        <BookGrid>
          <div className="d-flex justify-content-between flex-grow-1 w-100 flex-row mb-5">
            <h1 className="m-0">Books you may like</h1>
            <div className="h-100" onClick={refreshData}>
              <RefreshButton />
            </div>
          </div>
          {bookList.map((book: BookType, index: number) => {
            return <Book {...book} key={index} />;
          })}
        </BookGrid>
      </Layout>
    </>
  );
}
