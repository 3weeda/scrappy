import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/MotionDiv';
import styles from './index.module.scss';

const Scene4 = ({ transitionData }) => {
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
        <div className={styles.backdrop2} />
        <div className={styles.backdrop1}>
          <div className={styles.text}>
            <p>
              At the end of each school day, Scrappy would walk home from
              class.Carrying with him, all that pent up anxiety about being
              teased.
            </p>
          </div>
        </div>
        <div className={styles.backdrop1} />
        <div className={styles.backdrop2}>
          <div className={styles.text}>
            <p>
              His walks consisted of crossing train tracks and searching for
              empty spray cans dropped by the older graffiti writers. Finding
              cans and un-blasted spots to paint along the barriers next to the
              train depot, he honed his skills.
            </p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

Scene4.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene4;
