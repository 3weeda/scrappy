import Head from 'next/head';
import Scenes from 'components/Scenes';

const index = () => (
  <>
    <Head>
      <title>Scrappy</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* {typeof window !== 'undefined' && window.innerWidth > 1200 ? ( */}
    <Scenes />
    {/* // ) : (
    //   <div>Big screens only</div>
    // )} */}
  </>
);
export default index;
