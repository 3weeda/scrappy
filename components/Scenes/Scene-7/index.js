/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import MotionDiv from 'components/shared/MotionDiv';
import { useTransitionStepper } from 'hooks';
import styles from './index.module.scss';

const Scene7 = ({ transitionData }) => {
  const {
    currentStep,
    stepTwo,
    stepThree,
  } = useTransitionStepper(transitionData, [20, 70, 99, 100]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div className={styles.section}>
        <div
          className={styles.backdrop}
          style={{
            backgroundPosition:
              currentStep === 2
                ? `${100 - 0.9 * stepTwo}%`
                : currentStep >= 3
                ? '10%'
                : '100%',
          }}
        />
        <div
          className={styles.characterLeft}
          style={{
            left:
              currentStep === 2
                ? `${-23 + 0.23 * stepTwo}%`
                : currentStep >= 3
                ? '0'
                : '-23%',
            height:
              currentStep === 3
                ? `${80 + 1.2 * stepThree}%`
                : currentStep === 4
                ? '200%'
                : '80%',
            opacity:
              currentStep === 3
                ? `${1 - stepThree / 100}`
                : currentStep === 4
                ? '0'
                : '1',
          }}
        >
          <img src="/assets/images/scene7/2.png" alt="" />
        </div>
        <div
          className={styles.characterRight}
          style={{
            right:
              currentStep === 2
                ? `${-0.17 * stepTwo}%`
                : currentStep >= 3
                ? '-17'
                : '0%',
            height:
              currentStep === 3
                ? `${83 + 1.2 * stepThree}%`
                : currentStep === 4
                ? '203%'
                : '83%',
            opacity:
              currentStep === 3
                ? `${1 - stepThree / 100}`
                : currentStep === 4
                ? '0'
                : '1',
          }}
        >
          <img src="/assets/images/scene7/3.png" alt="" />
        </div>
      </div>
    </MotionDiv>
  );
};

Scene7.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene7;
