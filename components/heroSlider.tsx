import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import BookType from '@/types/bookType';
import Link from 'next/link';
import Image from 'next/image';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import style from '@/styles/heroSlider.module.scss';

export default function HeroSlider({ books, alt }: { books: BookType[]; alt?: boolean }) {
  return (
    <Splide
      options={{
        gap: '2rem',
        arrows: false,
        pagination: false,
        drag: false,
        autoplay: true,
        autoWidth: true,
        focus: 'center',
        breakpoints: responsive,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoStart: true,
        cover: true,
        autoScroll: {
          speed: 1,
        },
        loop: true,
      }}
    >
      {books.map(({ img, title, _id, unique_url, year, author }: BookType) => {
        return (
          <SplideSlide key={_id}>
            <Link href={unique_url}>
              <Image
                className={`${alt ? style.heroBook : ''} rounded fade-in`}
                src={img}
                alt={title}
                width={165}
                height={245}
                placeholder="blur"
                blurDataURL="/loader.svg"
              />
              {alt && <span className={`${style.heroBookText}`}>{`${year} \n ${author.split(',')[0]}`}</span>}
            </Link>
          </SplideSlide>
        );
      })}
    </Splide>
  );
}

const responsive = {
  breakpoints: {
    1320: {
      perPage: 4,
    },
    1140: {
      perPage: 3,
    },
    960: {
      perPage: 2,
    },
    720: {
      perPage: 2,
    },
    540: {
      perPage: 1,
    },
  },
};
