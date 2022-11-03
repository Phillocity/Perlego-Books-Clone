import Link from 'next/link';
import BookType from '@/types/bookType';
import Image from 'next/image';
import style from '@/styles/bookCard.module.scss';
import { useState } from 'react';

export default function Book({ _id, unique_url, title, author, img, category }: BookType) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseIn = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <>
      {/* ---------------------------------------------------------------------------------------------- */
      /*                                        Image section of card                                       */
      /* ---------------------------------------------------------------------------------------------- */}
      <div className={`${style.bookCard} px-0 fade-in col-12 col-sm-6 col-md-4 col-lg-5 col-xl-3 col-xxl-2`} key={_id}>
        <Link href={unique_url}>
          <div onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} className={`${style.bookItem} pb-3`}>
            <div className={style.bookImage}>
              <Image src={img} alt={title} width={160} height={245} className="fade-in" placeholder="blur" blurDataURL="/loader.svg" />
            </div>

            {/* ---------------------------------------------------------------------------------------------- */
            /*                                        Body text of card                                       */
            /* ---------------------------------------------------------------------------------------------- */}
            <div className={`${style.bookBody} mt-1 mx-2 d-flex flex-column justify-content-around`}>
              <p className={`h6`}>
                <strong>{title.length > 22 ? title.slice(0, 22) + '...' : title}</strong>
              </p>
              <p className={`${style.categoryHighlight} h6 text-uppercase`}>{category.split(' ')[0]}</p>
              <p className="h6 text-muted">{author.split(',')[0]}</p>
            </div>
          </div>
        </Link>

        {/* ---------------------------------------------------------------------------------------------- */
        /*                                         Bookmark anchor                                        */
        /* ---------------------------------------------------------------------------------------------- */}
        <Link href={'/'}>
          <Image src="/save.svg" alt={title} width={70} height={70} className={`${style.bookmark} ${isHover ? style["bookmark-trans"] : ""} fade-in`} />
        </Link>
      </div>
    </>
  );
}
