import Link from 'next/link';
import BookType from '@/types/bookType';
import Image from 'next/image';
import style from '@/styles/bookCard.module.scss';

export default function Book({ _id, unique_url, title, author, description, img, publisher, category, topic, year, pages }: BookType) {
  return (
    <>
      <div className={`${style.bookCard} flex-grow-1 px-0 fade-in col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2`} key={_id}>
        <Link href={unique_url}>
          <Image src={img} alt={title} width={160} height={245} />
          <div className={style.cardBorder}></div>
          <div className={`${style.bookBody} mt-3 mx-2`}>
            <p className="h6">{title.length > 29 ? title.slice(0, 29) + '...' : title}</p>
            <p className="h6">{category}</p>
            <p className="h6 text-muted">{author.split(',')[0]}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
