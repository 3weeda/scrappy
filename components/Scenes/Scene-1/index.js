import PropTypes from 'prop-types';
import Image from 'next/image';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import UseStepper from 'components/shared/useStepper';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene1 = ({ transitionData }) => {
  const step = UseStepper(transitionData, [2, 4, 6, 9, 10]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div
        className={cx(styles.section, {
          [styles.stepTwo]: step === 2,
          [styles.stepThree]: step === 3,
          [styles.stepFour]: step === 4,
          [styles.stepFive]: step === 5,
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
        <div className={styles.backdrop2}>
          <Image
            src="/assets/images/scene1/2.png"
            alt=""
            layout="fill"
            loading="eager"
          />
        </div>
        <div className={styles.character}>
          <img src="/assets/images/scene1/3.png" alt="" />
          <img src="/assets/images/scene1/4.png" alt="" />
          <img src="/assets/images/scene1/5.png" alt="" />
          <img src="/assets/images/scene1/6.png" alt="" />
          <img src="/assets/images/scene1/7.png" alt="" />
        </div>
        <div className={styles.people}>
          <img src="/assets/images/scene1/8.png" alt="" />
        </div>
        <Text size="34" maxW="410" top="20%" left="40%" visible={step === 2}>
          When a boy is born and becomes adopted he can grow up with a little
          bit of distrust for the system and feel neglected and unloved by his
          parents who should have shown him unconditional love.
        </Text>
        <Text
          size="34"
          bottom="30%"
          left="45%"
          visible={step === 3 || step === 4}
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
