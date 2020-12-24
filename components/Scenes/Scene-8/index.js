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
    <div className={styles.section} onClick={toggle}>
      <div className={styles.text}></div>
      <div
        className={cx(styles.backdrop1, {
          [styles.backdrop2]: step === 2,
          [styles.backdrop3]: step === 3,
          [styles.backdrop4]: step === 4,
        })}
      />
    </div>
  );
};

export default Scene8;
