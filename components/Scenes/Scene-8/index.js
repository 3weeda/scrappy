import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene8 = ({ transitionData }) => {
  const [step, setStep] = useState(1);
  const percent = (transitionData.percent * 10).toFixed();

  useEffect(() => {
    if (percent < 3) {
      setStep(1);
    } else if (percent >= 3 && percent < 6) {
      setStep(2);
    } else if (percent >= 6 && percent < 8) {
      setStep(3);
    } else if (percent >= 8) {
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
        <div className={styles.backdrop} />
        <Text maxW="650" size="35" top="12%" left="26%" visible={step === 3}>
          Around the period when he was stenciling, the city was considering
          defunding the arts program in schools. Scrappy felt this was an
          injustice and unfair to the artists in the community.
        </Text>
      </div>
    </MotionDiv>
  );
};

Scene8.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene8;
