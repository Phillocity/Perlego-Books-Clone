import Link from 'next/link';
import bookInterface from '@/types/bookType';

export const Book = (book: bookInterface) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.description}</p>
        <a href={book.unique_url} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
