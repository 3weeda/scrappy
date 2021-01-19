import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene4 = ({ transitionData }) => {
  const [step, setStep] = useState(1);
  const percent = (transitionData.percent * 10).toFixed();

  useEffect(() => {
    if (percent < 5) {
      setStep(1);
    } else if (percent >= 5) {
      setStep(2);
    }
  }, [percent]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div
        className={cx(styles.section, {
          [styles.stepTwo]: step === 2,
          [styles.stepThree]: transitionData.isLeaving,
        })}
      >
        <div className={styles.backdrop1}>
          <Text maxW="520" bottom="15%" right="14%" visible={step === 1}>
            At the end of each school day, Scrappy would walk home from class.
            Carrying with him, all that pent up anxiety about being teased.
          </Text>
        </div>
        <div className={styles.backdrop2} />
        <div className={styles.backdrop3}>
          <Text maxW="600" top="25%" left="7%" visible={step === 2}>
            His walks consisted of crossing train tracks and searching for empty
            spray cans dropped by the older graffiti writers. Finding cans and
            un-blasted spots to paint along the barriers next to the train
            depot, he honed his skills.
          </Text>
        </div>
        <div className={styles.backdrop4}>
          <img src="/assets/images/scene4/3.png" alt="" />
        </div>
      </div>
    </MotionDiv>
  );
};

Scene4.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene4;
