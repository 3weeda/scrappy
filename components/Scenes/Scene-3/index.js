/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import MotionDiv from 'components/shared/MotionDiv';
import UseTransitionStepper from 'hooks/useTransitionStepper';
import styles from './index.module.scss';

const Scene3 = ({ transitionData }) => {
  const { currentStep, stepTwo } = UseTransitionStepper(transitionData, [
    1,
    40,
    100,
  ]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div className={styles.section}>
        <div
          className={styles.backdrop1}
          style={{
            opacity:
              currentStep === 1
                ? '0'
                : currentStep === 2
                ? `${stepTwo / 100}`
                : '1',
            transform:
              currentStep === 1
                ? 'translateY(100vh)'
                : currentStep === 2
                ? `translateY(${100 - stepTwo}vh)`
                : 'translateY(0)',
          }}
        />
        <div
          className={styles.backdrop2}
          style={{
            opacity:
              currentStep === 1
                ? '0'
                : currentStep === 2
                ? `${stepTwo / 100}`
                : '1',
            transform:
              currentStep === 1
                ? 'translateY(-100vh)'
                : currentStep === 2
                ? `translateY(${stepTwo - 100}vh)`
                : 'translateY(0)',
          }}
        >
          <img src="/assets/images/scene3/2-1.png" alt="" />
        </div>
        <div
          className={styles.backdrop3}
          style={{
            opacity:
              currentStep === 1
                ? '0'
                : currentStep === 2
                ? `${stepTwo / 100}`
                : '1',
            transform:
              currentStep === 1
                ? 'translateY(40vh)'
                : currentStep === 2
                ? `translateY(${40 - 0.4 * stepTwo}vh)`
                : 'translateY(0)',
          }}
        >
          <div className={styles.backgroundContainer}>
            <div className={styles.glare} />
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

Scene3.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene3;
