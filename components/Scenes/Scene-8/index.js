import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import styles from './index.module.scss';

const Scene8 = ({ transitionData }) => {
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
        {/* step2 */}
        <div className={styles.text}>
          Around the period when he was stenciling, the city was considering
          defunding the arts program in schools. Scrappy felt this was an
          injustice and unfair to the artists in the community.
        </div>
        {/* step4 */}
        <div className={styles.text}>
          Art was in fact a passion of his and a key distraction from his daily
          hardships. In order to bring light to the subject, Scrappy spent his
          nights
        </div>
        <div
          className={cx(styles.backdrop1, {
            [styles.backdrop2]: step === 2,
            [styles.backdrop3]: step === 3,
            [styles.backdrop4]: step === 4,
          })}
        />
      </div>
    </MotionDiv>
  );
};

Scene8.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene8;
