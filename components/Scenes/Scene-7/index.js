import { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.scss';

const Scene7 = () => {
  const [step, setStep] = useState(1);

  const toggle = () => {
    if (step === 1) {
      setStep(2);
    } else {
      setStep(1);
    }
  };
  return (
    <div
      className={cx(styles.section, { [styles.sectionStepTwo]: step === 2 })}
      onClick={toggle}
    >
      <div className={styles.backdrop1} />
      <div className={styles.characterLeft}>
        <img src="/assets/images/scene7/2.png" />
      </div>
      <div className={styles.characterRight}>
        <img src="/assets/images/scene7/3.png" />
      </div>
    </div>
  );
};

export default Scene7;
