import { useState } from 'react';
import cx from 'classnames';
import MotionDiv from 'components/MotionDiv';
import styles from './index.module.scss';

const Scene7 = ({ transitionData }) => {
  const [step, setStep] = useState(1);

  const toggle = () => {
    if (step === 1) {
      setStep(2);
    } else {
      setStep(1);
    }
  };
  return (
    <MotionDiv transitionData={transitionData}>
      <div
        className={cx(styles.section, { [styles.sectionStepTwo]: step === 2 })}
        onClick={toggle}
      >
        <div className={styles.backdrop1} />
        <div className={styles.characterLeft}>
          <img src="/assets/images/scene7/2.png" />
        </div>
      </div>
    </MotionDiv>
  );
};

export default Scene7;
