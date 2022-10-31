import Link from 'next/link';
import BookType from '@/types/bookType';
import Image from 'next/image';
import style from '@/styles/bookCard.module.scss';

export default function Book(book: BookType) {
  return (
    <div className={`${style.bookCard}`} key={book._id}>
      <Link href={book.unique_url}>
        <Image className="w-100" src={book.img} alt={book.title} width={160} height={245} />
      </Link>
    </div>
  );
}
