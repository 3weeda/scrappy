import { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.scss';

const Scene8 = () => {
  const [step, setStep] = useState(1);

  const toggle = () => {
    if (step !== 4) {
      setStep(step + 1);
    } else {
      setStep(1);
    }
  };

  return (
    <div
      className={cx(styles.section, {
        [styles.sectionStepTwo]: step === 2,
        [styles.sectionStepThree]: step === 3,
        [styles.sectionStepFour]: step === 3,
      })}
      onClick={toggle}
    >
      <div className={styles.backdrop1} />
      <div className={styles.people}>
        <img src="/assets/images/scene8/2.png" />
      </div>
      <div className={styles.character}>
        <img src="/assets/images/scene8/3.png" />
      </div>
    </div>
  );
};

export default Scene8;
