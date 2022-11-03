import Image from 'next/image';
import Layout from '@/components/layout';
import NavBar from '@/components/navBar';
import style from '@/styles/home.module.scss';
import { MouseEvent, TouchEvent, useEffect, useRef, useState } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import HeroSlider from '@/components/heroSlider';
import { fetchData } from '@utils/fetcher';

export const getServerSideProps: GetStaticProps = async () => {
  const books = await fetchData('books?limit=10');

  return {
    props: { books },
  };
};

export default function Home({ books }: InferGetStaticPropsType<typeof getServerSideProps>) {
  const leftDOM = useRef(null);
  const [left, setLeft] = useState(100);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    const { clientX } = (e as MouseEvent) || (e as TouchEvent);
    setLeft((clientX / window.innerWidth) * 100 - 1);
  };

  return (
    <>
      <Layout home>
        <NavBar home />
        <div onMouseMove={e => handleMove(e)} onTouchMove={e => handleMove(e)} className={style.fluid}>
          <div style={{ width: `${left}%` }} ref={leftDOM} id={style['left-side']} className={style.side}>
            <div className={style.title}>
              <div className="row justify-content-start w-50 m-auto mb-5">
                <div
                  className={`top-wrap m-auto p-0 d-flex col-12 col-md-6 flex-row justify-content-start justify-content-md-end justify-content-sm-start justify-content-xs-start align-items-center`}
                >
                  <span className={`display-1`}>Unlock</span>
                  <Image className={`mx-2 mb-3`} src="/knowledge-block.svg" alt="lock" width={60} height={60} />
                </div>
                <span className="display-1 col-8 col-md-6 p-0 justify-content-end">Knowledge</span>
              </div>
              <HeroSlider books={books} />
            </div>
          </div>

          <div id={style['right-side']} className={style.side}>
            <div className={style.title}>
              <div className="row justify-content-start w-50 m-auto mb-5">
                <div
                  className={`top-wrap m-auto p-0 d-flex col-12 col-md-6 flex-row justify-content-start justify-content-md-end justify-content-sm-start justify-content-xs-start align-items-center`}
                >
                  <span className={`display-1`}>Unlock</span>
                  <Image className={`mx-2 mb-3`} src="/knowledge-block-alt.svg" alt="lock" width={60} height={60} />
                </div>
                <span className="display-1 col-8 col-md-6 p-0 justify-content-end">Education</span>
              </div>
              <HeroSlider books={books} alt />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
