import Head from 'next/head';
import LayoutChildProps from '@/types/layoutChildProp';

export default function Layout({ children, home }: LayoutChildProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container p-0">
        <main>{children}</main>
      </div>
    </>
  );
}
