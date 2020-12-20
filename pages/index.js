import Head from 'next/head';
import Layout from 'layout/Layout';
import Scenes from 'components/Scenes';

const index = () => {
  return (
    <Layout>
      <Head>
        <title>Scrappy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Scenes />
    </Layout>
  );
};
export default index;
