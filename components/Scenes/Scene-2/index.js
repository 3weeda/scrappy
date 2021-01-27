import PropTypes from 'prop-types';
import Image from 'next/image';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import UseStepper from 'components/shared/useStepper';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene2 = ({ transitionData }) => {
  const step = UseStepper(transitionData, [4, 7, 10]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div
        className={cx(styles.section, {
          [styles.stepTwo]: step === 2,
          [styles.stepThree]: step === 3,
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
        </div>
        <div className={styles.peopleRight}>
          <img src="/assets/images/scene2/3.png" alt="" />
        </div>
        <div className={styles.peopleLeft}>
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
        <div className={styles.backdrop3}>
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
          left="12%"
          visible={step === 1}
          className={styles.text1}
        >
          Scrappy was poor, and in school his classmates would tease and harass
          him about it. He felt bad that his kicks were torn up and generic.
        </Text>
        <Text
          maxW="460"
          top="22%"
          right="18%"
          visible={step === 2}
          className={styles.text2}
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
