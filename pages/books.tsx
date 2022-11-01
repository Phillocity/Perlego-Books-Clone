import Head from 'next/head';
import getDomain from '@/utils/domainName';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import BookType from '@/types/bookType';
import Book from '@/components/bookCard';
import Layout from '@/components/layout';
import BookGrid from '@/components/bookGrid';

/* ---------------------------------------------------------------------------------------------- */
/*                        Initial data fetching to return data from server                        */
/* ---------------------------------------------------------------------------------------------- */
export const getServerSideProps: GetStaticProps = async context => {
  const res = await fetch(`${getDomain()}/api/books`, {
    method: 'GET',
    headers: {
      Authorization: `Perlego${process.env.SECRET_KEY}`,
    },
  });

  const books: BookType[] = await res.json();
  return {
    props: { books },
  };
};

export default function BookRecommend({ books }: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <>
      <Layout>
        <h1>Books you may like</h1>
        <BookGrid>
          {books.map((book: BookType, index: number) => {
            return <Book {...book} key={index} />;
          })}
        </BookGrid>
      </Layout>
    </>
  );
}
