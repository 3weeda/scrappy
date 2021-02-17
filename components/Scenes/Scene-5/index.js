/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import Image from 'next/image';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import UseTransitionStepper from 'hooks/useTransitionStepper';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene5 = ({ transitionData }) => {
  const {
    currentStep,
    stepTwo,
    stepThree,
    stepFour,
  } = UseTransitionStepper(transitionData, [1, 30, 50, 80, 100]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div
        className={cx(styles.section, {
          [styles.stepThree]: currentStep === 3,
          [styles.stepFour]: currentStep === 4,
          [styles.stepFive]: currentStep === 5,
        })}
      >
        <div className={styles.backdrop1}>
          <Image
            src="/assets/images/scene5/1.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="bottom left"
            loading="eager"
            quality={100}
          />
        </div>
        <div
          className={styles.backdrop4}
          style={{
            opacity:
              currentStep < 3
                ? '0'
                : currentStep === 3
                ? `${stepThree / 100}`
                : currentStep === 4
                ? `${(100 - stepFour) / 100}`
                : '1',
          }}
        >
          <Image
            src="/assets/images/scene5/7.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="bottom left"
            loading="eager"
            quality={100}
          />
        </div>
        <div
          className={styles.backdrop2}
          style={{
            opacity:
              currentStep < 4
                ? '0'
                : currentStep === 4
                ? `${stepFour / 100}`
                : '1',
          }}
        >
          <Image
            src="/assets/images/scene5/2-1.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="bottom left"
            loading="eager"
            quality={100}
          />
        </div>
        <div
          className={styles.characterRight}
          style={{
            right:
              currentStep < 4
                ? '-50%'
                : currentStep === 4
                ? `${-50 + 0.64 * stepFour}%`
                : '14%',
          }}
        >
          <img src="/assets/images/scene5/4.png" alt="" />
        </div>
        <div className={styles.backdrop3}>
          <Image
            src="/assets/images/scene5/2-2.png"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="bottom left"
            loading="eager"
            quality={100}
          />
        </div>
        <div
          className={styles.characterLeft}
          style={{
            left:
              currentStep === 1
                ? '16%'
                : currentStep === 2
                ? `${16 + 0.08 * stepTwo}%`
                : '24%',
          }}
        >
          <img src="/assets/images/scene5/3.png" alt="" />
          <div className={styles.hand}>
            <img src="/assets/images/scene5/5.png" alt="" />
          </div>
        </div>
        <Text
          maxW="650"
          bottom="20%"
          withBg
          className={styles.text}
          visible={currentStep === 2 || currentStep === 3}
          style={{
            right:
              currentStep === 1
                ? '19%'
                : currentStep === 2
                ? `${19 - 0.09 * stepTwo}%`
                : '10%',
          }}
        >
          After a few years of honing his drawing and writing styles, he would
          cut stencils and go out and paint them in the streets over the
          weekend. Posting these stencils up began to give Scrappy a boosted
          selfconfdence, something teenagers of his age can struggle with.
        </Text>
        <div
          className={styles.car}
          style={{
            left:
              currentStep < 3
                ? '-300vh'
                : currentStep === 3
                ? `${-300 + 5.5 * stepThree}vh`
                : '250vh',
          }}
        >
          <img src="/assets/images/scene5/6.png" alt="" />
        </div>
      </div>
    </MotionDiv>
  );
};

Scene5.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene5;
