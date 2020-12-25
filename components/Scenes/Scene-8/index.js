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
      {step === 2 ? (
        <div className={styles.text}>
          Around the period when he was stenciling, the city was considering
          defunding the arts program in schools. Scrappy felt this was an
          injustice and unfair to the artists in the community.
        </div>
      ) : step === 4 ? (
        <div className={styles.text}>
          Art was in fact a passion of his and a key distraction from his daily
          hardships. In order to bring light to the subject, Scrappy spent his
          nights
        </div>
      ) : null}
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
