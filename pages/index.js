import Head from 'next/head';
import Layout from 'layout/Layout';
import Preloader from 'components/Preloader';

const index = () => {
  return (
    <Layout>
      <Head>
        <title>Scrappy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Preloader />
    </Layout>
  );
};
export default index;
