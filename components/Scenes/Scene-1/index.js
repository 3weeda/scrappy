import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene1 = ({ transitionData }) => {
  const [step, setStep] = useState(1);
  const percent = (transitionData.percent * 10).toFixed();

  useEffect(() => {
    // console.log(percent);
    if (percent < 3) {
      setStep(1);
    } else if (percent >= 3 && percent < 6) {
      setStep(2);
    } else if (percent >= 6 && percent < 9) {
      setStep(3);
    } else if (percent >= 9) {
      setStep(4);
    }
  }, [percent]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div
        className={cx(styles.section, {
          [styles.stepTwo]: step === 2,
          [styles.stepThree]: step === 3,
          [styles.stepFour]: step === 4,
        })}
      >
        <div className={styles.backdrop1} />
        <div className={styles.backdrop2} />
        <div className={styles.character}>
          <img src="/assets/images/scene1/3.png" alt="" />
        </div>
        <div className={styles.people}>
          <img src="/assets/images/scene1/8.png" alt="" />
        </div>
        <Text size="34" maxW="410" top="20%" left="40%" visible={step === 2}>
          When a boy is born and becomes adopted he can grow up with a litle bit
          of distrust for the system and feel neglected and unloved by his
          parents who should have shown him unconditional love.
        </Text>
        <Text size="34" bottom="30%" left="45%" visible={step === 3}>
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
