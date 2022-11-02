import Image from 'next/image';
import Layout from '@/components/layout';
import NavBar from '@/components/navBar';
import style from '@/styles/home.module.scss';
import { MouseEvent, TouchEvent, useEffect, useRef, useState } from 'react';

export default function Home() {
  const leftDOM = useRef(null);
  const [left, setLeft] = useState(100);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    const { clientX } = (e as MouseEvent) || (e as TouchEvent);
    setLeft((clientX / window.innerWidth) * 100 + 1);
  };

  return (
    <>
      <Layout home>
        <NavBar />
        <div onMouseMove={e => handleMove(e)} onTouchMove={e => handleMove(e)} className={style.fluid}>
          <div style={{ width: `${left}%` }} ref={leftDOM} id={style['left-side']} className={style.side}>
            <div className={style.title}>
              <h2 className={`${style.widther} display-1 d-flex align-items-center justify-content-between`}>
                Unlock
                <Image className={'img-fluid'} src="/knowledge-block.svg" alt="lock" width={60} height={60} />
                <span className="display-1">Education</span>
              </h2>
            </div>
          </div>

          <div id={style['right-side']} className={style.side}>
            <div className={style.title}>
              <h2 className={`${style.widther} display-1 d-flex align-items-center justify-content-between`}>
                Unlock
                <Image className={style.imgRes} src="/knowledge-block-alt.svg" alt="lock" width={60} height={60} />
                <span className="display-1">Knowledge</span>
              </h2>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
