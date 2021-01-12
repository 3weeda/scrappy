import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene2 = ({ transitionData }) => {
  const [step, setStep] = useState(1);
  const percent = (transitionData.percent * 10).toFixed();

  useEffect(() => {
    // console.log(percent);
    if (percent < 5) {
      setStep(1);
    } else if (percent > 5 && percent < 8) {
      setStep(2);
    } else if (percent > 8) {
      setStep(3);
    }
  }, [percent]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div
        className={cx(styles.section, {
          [styles.stepTwo]: step === 2,
          [styles.stepThree]: step === 3,
        })}
      >
        <div className={styles.backdrop1} />
        <div className={styles.peopleRight}>
          <img src="/assets/images/scene2/3.png" alt="" />
        </div>
        <div className={styles.peopleLeft}>
          <img src="/assets/images/scene2/2.png" alt="" />
        </div>
        <div className={styles.backdrop2} />
        <div className={styles.backdrop3} />
        <Text maxW="580" top="30%" left="12%" visible={step === 1}>
          Scrappy was poor, and in school his classmates would tease and harass
          him about it. He felt bad that his kicks were torn up and generic.
        </Text>
        <Text maxW="460" top="22%" right="18%" visible={step === 2}>
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
