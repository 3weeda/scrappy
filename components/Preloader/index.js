import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(100);

  useEffect(() => {
    if (!loading) return;

    const intervalId = setInterval(() => {
      setLoading(loading - 1);
    }, 100);

    return () => clearInterval(intervalId);
  }, [loading]);

  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__img}>
        <div className={styles.logo} style={{ height: `${loading}%` }}>
          <img src="/assets/images/logo.png" alt="" />
        </div>
        <div className={styles.logo}>
          <img src="/assets/images/logo2.png" alt="" />
        </div>
      </div>
      <div className={styles.preloader__text}>
        <span>{`Loading.. ${100 - loading}%`}</span>
      </div>
    </div>
  );
};

export default Preloader;
