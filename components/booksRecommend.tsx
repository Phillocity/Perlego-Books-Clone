import BookType from '@/types/bookType';
import Book from '@/components/bookCard';

export default function BookRecommend({ bookList }: { bookList: BookType[] }) {
  return (
    <>
      {bookList.slice(0,14).map((book: BookType, index: number) => {
        return <Book {...book} key={index} />;
      })}
    </>
  );
}
