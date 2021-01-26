import { useEffect, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import Preloader from './Preloader';
import styles from './index.module.scss';

const Intro = ({ transitionData }) => {
  const [loading, setLoading] = useState(100);
  const [step, setStep] = useState(1);
  const percent = (transitionData.percent * 10).toFixed();

  // TODO: Change to actual loading time for all assets
  useEffect(() => {
    let intervalId;
    if (loading) {
      intervalId = setInterval(() => {
        setLoading(loading - 1);
      }, 50);
    }
    document.body.setAttribute(
      'style',
      `${
        loading
          ? 'overflow: hidden; max-height: 100vh;'
          : 'overflow: unset; max-height: unset;'
      }`
    );
    return () => {
      clearInterval(intervalId);
      document.body.setAttribute(
        'style',
        'overflow: unset; max-height: unset;'
      );
    };
  }, [loading]);

  useEffect(() => {
    if (percent < 5) {
      setStep(1);
    } else if (percent > 5 && !loading) {
      setStep(2);
    }
  }, [percent]);

  // TODO: consider using this to control scrolling
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
                  <Image
                    src="/assets/images/intro/down-arrow.svg"
                    alt="Scroll"
                    width="24"
                    height="auto"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MotionDiv>
  );
};

Intro.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Intro;
