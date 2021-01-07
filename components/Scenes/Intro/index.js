import { useEffect, useState } from 'react';
import cx from 'classnames';
import MotionDiv from 'components/MotionDiv';
import Preloader from './Preloader';
import styles from './index.module.scss';

const Intro = ({ transitionData }) => {
  const [loading, setLoading] = useState(100);
  const [step, setStep] = useState(1);
  const percent = Number.parseInt(transitionData.percent * 100);

  // TODO: Change to actual loading time for all assets
  useEffect(() => {
    if (!loading) return;

    const intervalId = setInterval(() => {
      setLoading(loading - 1);
    }, 10);

    return () => clearInterval(intervalId);
  }, [loading]);

  useEffect(() => {
    // console.log(percent);
    if (percent < 50) {
      setStep(1);
    } else if (percent > 50) {
      setStep(2);
    }
  }, [percent]);

  // const handleScrolling = () => {
  //   window.scrollBy(0, window.innerHeight + 100);
  // };

  // useEffect(() => {
  //   if (step === 3) {
  //     window.addEventListener('scroll', handleScrolling);
  //   }
  //   return () => {
  //     window.removeEventListener('scroll', handleScrolling);
  //   };
  // }, [step]);

  return (
    <MotionDiv transitionData={transitionData} noEntering>
      <div
        className={cx(styles.intro, {
          [styles.stepTwo]: step === 2,
        })}
      >
        <Preloader loading={loading} animateUp={step !== 1} />
        <div className={styles.intro__content}>
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
              <div className={styles.scrollInfo}>
                <div className={styles.text}>
                  <p>Scroll</p>
                </div>
                <div className={styles.arrow}>
                  <img src="/assets/images/down-arrow.svg" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MotionDiv>
  );
};

export default Intro;
