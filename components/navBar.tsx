import Image from 'next/image';
import Link from 'next/link';
import style from '@/styles/navBar.module.scss';
import CTAButton from '@/components/ctaButton';

export default function NavBar({ home }: { home?: boolean }) {
  return (
    <>
      <nav>
        <div className={`${style.navBar} ${home ? 'position-fixed' : ''} container d-flex justify-content-between py-4`}>
          <Link href="/">
            <Image src="/berlego-logo.png" alt="Berlego Logo" width={114} height={35} />
          </Link>

          <Link href="https://www.perlego.com/sign-up">
            <CTAButton />
          </Link>
        </div>
      </nav>
    </>
  )
}
