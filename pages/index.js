import Head from 'next/head';
import Scenes from 'components/Scenes';

const index = () => (
  <>
    <Head>
      <title>Scrappy</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Scenes />
  </>
);
export default index;
