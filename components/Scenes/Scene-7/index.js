import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import styles from './index.module.scss';

const Scene7 = ({ transitionData }) => {
  const [step, setStep] = useState(1);
  const percent = (transitionData.percent * 10).toFixed();

  useEffect(() => {
    if (percent < 4) {
      setStep(1);
    } else if (percent >= 4 && percent < 7) {
      setStep(2);
    } else if (percent >= 7) {
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
        <div className={styles.backdrop} />
        <div className={styles.characterLeft}>
          <img src="/assets/images/scene7/2.png" alt="" />
        </div>
        <div className={styles.characterRight}>
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
