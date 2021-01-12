import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import styles from './index.module.scss';

const Scene7 = ({ transitionData }) => {
  const [step, setStep] = useState(1);
  const percent = (transitionData.percent * 10).toFixed();

  useEffect(() => {
    // console.log(percent);
    if (percent < 3) {
      setStep(1);
    } else if (percent > 3 && percent < 7) {
      setStep(2);
    } else if (percent > 7) {
      setStep(1);
    }
  }, [percent]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div
        className={cx(styles.section, {
          [styles.stepTwo]: step === 2,
        })}
      >
        <div className={styles.backdrop} />
        <div className={styles.character}>
          <img src="/assets/images/scene7/2.png" alt="" />
        </div>
      </div>
    </MotionDiv>
  );
};

Scene7.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene7;
