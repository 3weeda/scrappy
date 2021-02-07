/* eslint-disable no-bitwise */
/* eslint-disable no-nested-ternary */
import Image from 'next/image';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import UseTransitionStepper from 'components/shared/useTransitionStepper';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene1 = ({ transitionData }) => {
  const {
    currentStep,
    stepTwo,
    stepThree,
    stepFive,
  } = UseTransitionStepper(transitionData, [1, 25, 50, 75, 100]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div
        className={cx(styles.section, {
          [styles.stepFour]: currentStep === 4,
          [styles.stepFive]: currentStep === 5,
        })}
      >
        <div className={styles.backdrop1}>
          <Image
            src="/assets/images/scene1/1.png"
            alt=""
            layout="fill"
            loading="eager"
          />
        </div>
        <div
          className={styles.backdrop2}
          style={{
            left:
              currentStep === 2
                ? `${20 - 0.09 * stepTwo}%`
                : currentStep !== 1
                ? '11%'
                : '20%',
          }}
        >
          <Image
            src="/assets/images/scene1/2.png"
            alt=""
            layout="fill"
            loading="eager"
          />
        </div>
        <div
          className={styles.character}
          style={{
            left:
              currentStep === 1
                ? '15%'
                : currentStep === 2
                ? `${15 - 0.08 * stepTwo}%`
                : currentStep === 5
                ? `${7 - 0.5 * stepFive}%`
                : `7%`,
            top:
              currentStep === 1
                ? '4%'
                : currentStep === 2
                ? `${4 - 0.04 * stepTwo}%`
                : '0',
          }}
        >
          <img src="/assets/images/scene1/3.png" alt="" />
          <img src="/assets/images/scene1/4.png" alt="" />
          <img src="/assets/images/scene1/5.png" alt="" />
          <img src="/assets/images/scene1/6.png" alt="" />
          <img src="/assets/images/scene1/7.png" alt="" />
        </div>
        <div
          className={styles.people}
          style={{
            right:
              currentStep === 1
                ? '-34%'
                : currentStep === 2
                ? `${-34 + 0.29 * stepTwo}%`
                : currentStep === 3
                ? `${-5 - 0.29 * stepThree}%`
                : currentStep === 5
                ? `${-36 - 0.34 * stepFive}%`
                : `-36%`,
          }}
        >
          <img src="/assets/images/scene1/8.png" alt="" />
        </div>
        <Text
          size="34"
          maxW="410"
          top="20%"
          left="40%"
          visible={currentStep === 3}
        >
          When a boy is born and becomes adopted he can grow up with a little
          bit of distrust for the system and feel neglected and unloved by his
          parents who should have shown him unconditional love.
        </Text>
        <Text
          size="34"
          bottom="30%"
          left="45%"
          visible={currentStep === 4 || currentStep === 5}
          className={styles.text}
        >
          That young man, Scrappy began to rebel as a tween. Pursuing an outlet
          for his frustration for feeling different, and not fting in with other
          classmates. Always questioning why those that should have been there
          to support him, gave up and sent him away.
        </Text>
      </div>
    </MotionDiv>
  );
};

Scene1.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene1;
