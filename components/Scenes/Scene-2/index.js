/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import Image from 'next/image';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import UseTransitionStepper from 'components/shared/useTransitionStepper';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene2 = ({ transitionData }) => {
  const {
    currentStep,
    stepTwo,
    stepFour,
    stepSix,
  } = UseTransitionStepper(transitionData, [1, 10, 20, 35, 65, 95, 100]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div
        className={cx(styles.section, {
          [styles.stepFour]: currentStep === 4,
        })}
      >
        <div className={styles.backdrop1}>
          <Image
            src="/assets/images/scene2/1.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            loading="eager"
            quality={100}
          />
          <img
            src="/assets/images/scene2/4.png"
            className={styles.head}
            alt=""
          />
        </div>
        <div
          className={styles.peopleRight}
          style={{
            opacity:
              currentStep === 4
                ? `${stepFour / 100}`
                : currentStep === 5
                ? '1'
                : currentStep === 6
                ? `${(100 - stepSix) / 100}`
                : '0',
            height:
              currentStep === 4
                ? `${200 - stepFour}%`
                : currentStep === 5
                ? '100%'
                : currentStep === 6
                ? `${stepSix + 100}%`
                : '0',
            right:
              currentStep === 4
                ? `${-80 + 0.77 * stepFour}%`
                : currentStep === 5
                ? '-3%'
                : currentStep === 6
                ? `${-3 - 0.77 * stepSix}%`
                : '-80%',
          }}
        >
          <img src="/assets/images/scene2/3.png" alt="" />
        </div>
        <div
          className={styles.peopleLeft}
          style={{
            opacity:
              currentStep === 4
                ? `${stepFour / 100}`
                : currentStep === 5
                ? '1'
                : currentStep === 6
                ? `${(100 - stepSix) / 100}`
                : '0',
            height:
              currentStep === 4
                ? `${200 - stepFour}%`
                : currentStep === 5
                ? '100%'
                : currentStep === 6
                ? `${stepSix + 100}%`
                : '0',
            left:
              currentStep === 4
                ? `${-80 + 0.77 * stepFour}%`
                : currentStep === 5
                ? '-3%'
                : currentStep === 6
                ? `${-3 - 0.77 * stepSix}%`
                : '-80%',
          }}
        >
          <img src="/assets/images/scene2/2.png" alt="" />
        </div>
        <div className={styles.backdrop2}>
          <Image
            src="/assets/images/scene2/over1.png"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            loading="eager"
          />
        </div>
        <div
          className={styles.backdrop3}
          style={{
            opacity:
              currentStep === 4
                ? `${stepFour / 100}`
                : currentStep > 4
                ? '1'
                : '0',
          }}
        >
          <Image
            src="/assets/images/scene2/over2.png"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            loading="eager"
          />
        </div>
        <Text
          maxW="580"
          top="34%"
          left="6%"
          className={styles.text1}
          style={{
            opacity:
              currentStep === 2
                ? `${stepTwo / 100}`
                : currentStep === 3
                ? '1'
                : currentStep === 4
                ? `${(100 - stepFour) / 100}`
                : '0',
            transform:
              currentStep === 2
                ? `translateX(${stepTwo}px)`
                : currentStep === 3
                ? 'translateX(100px)'
                : currentStep === 4
                ? `translateX(${100 + stepFour}px)`
                : currentStep === 5
                ? 'translateX(200px)'
                : 'none',
          }}
        >
          Scrappy was poor, and in school his classmates would tease and harass
          him about it. He felt bad that his kicks were torn up and generic.
        </Text>
        <Text
          maxW="460"
          top="22%"
          right="12%"
          className={styles.text2}
          style={{
            opacity:
              currentStep === 4
                ? `${stepFour / 100}`
                : currentStep === 5
                ? '1'
                : currentStep === 6
                ? `${(100 - stepSix) / 100}`
                : '0',
            transform:
              currentStep === 4
                ? `translateX(-${stepFour}px)`
                : currentStep === 5
                ? 'translateX(-100px)'
                : currentStep === 6
                ? `translateX(${-100 - stepSix}px)`
                : currentStep === 7
                ? `translateX(-200px)`
                : 'none',
          }}
        >
          All he wanted to rock were the same shoes as his skateboard heroes,
          and the popular kids in his class.
        </Text>
      </div>
    </MotionDiv>
  );
};

Scene2.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene2;
