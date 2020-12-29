import { useEffect, useState } from 'react';
import cx from 'classnames';
import Header from 'layout/Header';
import Layout from 'layout/Layout';
import MotionDiv from 'components/MotionDiv';
import Preloader from './Preloader';
import styles from './index.module.scss';

const Intro = ({ transitionData }) => {
  const [loading, setLoading] = useState(100);
  const [animateOut, setanimateOut] = useState(false);
  const [fadeOut, setFadeOut] = useState(1);
  console.log(transitionData);

  // TODO: Change to actual loading time for all assets
  useEffect(() => {
    if (!loading) return;

    const intervalId = setInterval(() => {
      setLoading(loading - 1);
    }, 10);

    return () => clearInterval(intervalId);
  }, [loading]);

  useEffect(() => {
    if (transitionData.percent > 0.8) {
      setFadeOut(1 - transitionData.percent);
    }
    return () => {
      setFadeOut(1);
    };
  }, [transitionData.percent]);

  return (
    <MotionDiv>
      <Layout hideHeader>
        <Header hideLogo />
        <div className={styles.intro} id="title" style={{ opacity: fadeOut }}>
          <Preloader loading={loading} animateOut={animateOut} />
          <div
            className={cx(styles.intro__content, {
              [styles.above]: animateOut,
            })}
          >
            {loading > 0 ? (
              <span>{`Loading.. ${100 - loading}%`}</span>
            ) : (
              <div className={styles.question}>
                <h2>
                  How do you make
                  <br />
                  a mark on the world,
                  <br />
                  when you have so little?
                </h2>
                <button onClick={() => setanimateOut(true)}>
                  <div className={styles.scrollBtn}>
                    <p>Scroll</p>
                  </div>
                  <div className={styles.arrow}>
                    <img src="/assets/images/down-arrow.svg" />
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </MotionDiv>
  );
};

export default Intro;
