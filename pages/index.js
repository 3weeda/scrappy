import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const [loading, setLoading] = useState(100);

  useEffect(() => {
    if (!loading) return;

    const intervalId = setInterval(() => {
      setLoading(loading - 1);
    }, 100);

    return () => clearInterval(intervalId);
  }, [loading]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Scrappy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.screen}>
          <div className={styles.card}>
            <div className={styles.cont} style={{ height: `${loading}%` }}>
              <img src="/assets/images/logo.png" alt="" />
            </div>
            <div className={styles.cont}>
              <img src="/assets/images/logo2.png" alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
