import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { MouseEvent, TouchEvent, useRef, useState } from 'react';
import Layout from '@/components/layout';
import NavBar from '@/components/navBar';
import HeroSlider from '@/components/heroSlider';
import BookType from '@/types/bookType';
import { fetchData } from '@utils/fetcher';
import style from '@/styles/home.module.scss';

export const getServerSideProps: GetServerSideProps = async () => {
  const books = await fetchData('books?limit=10');

  return {
    props: { books },
  };
};

export default function Home({ books }: { books: BookType[] }) {
  const leftDOM = useRef(null);
  const [left, setLeft] = useState(100);

  /* ---------------------------------------------------------------------------------------------- */
  /*                        Handles movement from mouse and touch events                            */
  /* ---------------------------------------------------------------------------------------------- */
  const handleMove = (e: MouseEvent | TouchEvent) => {
    const { clientX } = (e as MouseEvent) || (e as TouchEvent);
    setLeft((clientX / window.innerWidth) * 100 - 1);
  };

  return (
    <>
      <Layout home>
        <NavBar home />
        {/* ---------------------------------------------------------------------------------------------- */
        /*                           Hero image being affected by mouse movement                          */
        /* ---------------------------------------------------------------------------------------------- */}
        <div onMouseMove={e => handleMove(e)} onTouchMove={e => handleMove(e)} className={style.fluid}>
          <div style={{ width: `${left}%` }} ref={leftDOM} id={style['left-side']} className={style.side}>
            <div className={style.title}>
              <div className="row justify-content-start w-50 m-auto mb-5 fade-in">
                <div
                  className={`top-wrap m-auto p-0 d-flex col-12 col-md-6 flex-row justify-content-start justify-content-md-end justify-content-sm-start justify-content-xs-start align-items-center`}
                >
                  <span className={`${style.shadow} display-1 text-white`}>Unlock</span>
                  <Image className={`mx-2 mb-3`} src="/knowledge-block.svg" alt="lock" width={60} height={60} />
                </div>
                <span className={`${style.shadow} display-1 col-8 col-md-6 p-0 justify-content-end text-white`}>Knowledge</span>
              </div>
              <HeroSlider books={books} />
              <div className={`${style.shadow} text-center mt-5 d-flex justify-content-center`}>
                <h2 className="w-50 text-white fade-in d-none d-sm-block">
                  The complete academic library with over 1,000,000+ textbooks, articles and tools at your fingertips.
                </h2>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------- */
          /*                      Duplicate background element to create unveil effect                      */
          /* ---------------------------------------------------------------------------------------------- */}
          <div id={style['right-side']} className={style.side}>
            <div className={style.title}>
              <div className="row justify-content-start w-50 m-auto mb-5">
                <div
                  className={`top-wrap m-auto p-0 d-flex col-12 col-md-6 flex-row justify-content-start justify-content-md-end justify-content-sm-start justify-content-xs-start align-items-center`}
                >
                  <span className={`${style.shadow} display-1`}>Unlock</span>
                  <Image className={`mx-2 mb-3`} src="/knowledge-block-alt.svg" alt="lock" width={60} height={60} />
                </div>
                <span className={`${style.shadow} display-1 col-8 col-md-6 p-0 justify-content-end`}>Education</span>
              </div>
              <HeroSlider books={books} alt />
              <div className={`${style.shadow} text-center mt-5 d-flex justify-content-center`}>
                <h2 className="w-50 fade-in">{`Whether you're writing an essay or preparing for an exam. Study smarter with our built-in study tools.`}</h2>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
