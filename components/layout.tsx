import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import LayoutChildProps from '@/types/layoutChildProp';

export default function Layout({ children, home }: LayoutChildProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container p-0">
        <main>{children}</main>
        {!home && (
          <div>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
    </>
  )
}
