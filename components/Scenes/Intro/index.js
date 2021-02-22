import Image from 'next/image';
import PropTypes from 'prop-types';
import MotionDiv from 'components/shared/MotionDiv';
import UseTransitionStepper from 'hooks/useTransitionStepper';
import smoothScroll from 'utils/smoothScroll';
import Preloader from './Preloader';
import styles from './index.module.scss';

const Intro = ({ transitionData, loading }) => {
  const { currentStep, stepTwo } = UseTransitionStepper(transitionData, [
    10,
    100,
  ]);

  const scrollToFirstScene = () => {
    const el = document.getElementById(`scene1`);
    if (el) {
      smoothScroll(el);
    }
  };

  return (
    <MotionDiv transitionData={transitionData} noEntering>
      <div className={styles.intro}>
        <Preloader loading={loading} transition={stepTwo} />
        <div
          className={styles.intro__content}
          style={{
            transform: currentStep === 2 && `translateY(${-0.3 * stepTwo}%)`,
          }}
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
              <button
                type="button"
                className={styles.scrollInfo}
                onClick={scrollToFirstScene}
              >
                <div className={styles.text}>
                  <p>Scroll</p>
                </div>
                <div className={styles.arrow}>
                  <Image
                    src="/assets/images/intro/down-arrow.svg"
                    alt="Scroll"
                    width="24"
                    height="auto"
                    quality={100}
                  />
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </MotionDiv>
  );
};

Intro.propTypes = {
  transitionData: PropTypes.object.isRequired,
  loading: PropTypes.number.isRequired,
};

export default Intro;
