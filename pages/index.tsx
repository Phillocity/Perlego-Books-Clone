import Image from 'next/image';
import Layout from '@/components/layout';
import NavBar from '@/components/navBar';

export default function Home() {
  return (
    <>
      <Layout home>
        <NavBar />
      </Layout>
    </>
  )
}
