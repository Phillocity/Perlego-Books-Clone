import Image from 'next/image';
import Link from 'next/link';
import style from '@/styles/navBar.module.scss';
import CTAButton from '@/components/ctaButton';

export default function NavBar() {
  return (
    <>
      <nav className={style['nav-bar']}>
        <div className="container col-12 col-md-10 col-lg-8 d-flex justify-content-between py-4">
          <Link href="/">
            <Image src="/berlego-logo.png" alt="Berlego Logo" width={114} height={35} />
          </Link>

          <Link href="/">
            <CTAButton />
          </Link>
        </div>
      </nav>
    </>
  );
}
