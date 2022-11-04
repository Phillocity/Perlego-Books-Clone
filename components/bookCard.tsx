import Link from 'next/link';
import BookType from '@/types/bookType';
import Image from 'next/image';
import style from '@/styles/bookCard.module.scss';
import { useState } from 'react';

export default function Book({ _id, unique_url, title, author, img, category }: BookType) {
  const [isHover, setIsHover] = useState(false);
  const authorText: string = author.split(/[,;]+/)[0].length > 30 ? author : `${author.split(/[,;]+/)[0]} \n\n`;
  const categoryText: string = category.split(' ')[0];
  const hoverBookmark: string = isHover ? style['bookmark-trans'] : 'd-none';
  const titleText: string = title.length > 30 ? title.slice(0, 30) + '...' : `${title}\n\n`;

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
      <div
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
        className={`${style.bookCard} px-0  col-12 col-sm-6 col-md-4 col-lg-5 col-xl-3 col-xxl-2`}
        key={_id}
      >
        <Link href={unique_url}>
          <div className={`${style.bookItem} pb-3`}>
            <div className={style.bookImage}>
              <Image src={img} alt={title} width={160} height={245} placeholder="blur" blurDataURL="/loader.svg" />
            </div>

            {/* ---------------------------------------------------------------------------------------------- */
            /*                                        Body text of card                                       */
            /* ---------------------------------------------------------------------------------------------- */}
            <div className={`${style.bookBody} mt-1 mx-2 d-flex flex-column justify-content-around`}>
              <p className={`h6 mt-3`}>{titleText}</p>
              <p className={`${style.categoryHighlight} h6 text-uppercase p-1`}>{categoryText}</p>
              <p className="h6 text-muted">{authorText}</p>
            </div>
          </div>
        </Link>

        {/* ---------------------------------------------------------------------------------------------- */
        /*                                         Bookmark anchor                                        */
        /* ---------------------------------------------------------------------------------------------- */}
        <Link href={'/'}>
          <Image
            src="/save.svg"
            alt={title}
            width={70}
            height={70}
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
            className={`${style.bookmark} ${hoverBookmark} `}
          />
        </Link>
      </div>
    </>
  );
}
