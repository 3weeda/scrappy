import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/MotionDiv';
import styles from './index.module.scss';

const Scene9 = ({ transitionData }) => {
  const [step, setStep] = useState(1);
  const percent = (transitionData.percent * 10).toFixed();

  useEffect(() => {
    // console.log(percent);
    if (percent < 3) {
      setStep(1);
    } else if (percent > 3 && percent < 6) {
      setStep(2);
    } else if (percent > 6) {
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
        <div className={styles.text}>
          <p>
            At the end of each school day, Scrappy would walk home from
            class.Carrying with him, all that pent up anxiety about being
            teased.
          </p>
        </div>
        <div className={styles.backdrop} />
      </div>
    </MotionDiv>
  );
};

Scene9.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene9;
