import { useState } from 'react';
import MotionDiv from 'components/MotionDiv';
import styles from './index.module.scss';

const Scene4 = ({ transitionData }) => {
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
      <div className={styles.section} onClick={toggle}>
        {step === 1 ? (
          <>
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
          </>
        ) : step === 2 ? (
          <>
            <div className={styles.backdrop1} />
            <div className={styles.backdrop2}>
              <div className={styles.text}>
                <p>
                  His walks consisted of crossing train tracks and searching for
                  empty spray cans dropped by the older graffiti writers.
                  Finding cans and un-blasted spots to paint along the barriers
                  next to the train depot, he honed his skills.
                </p>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </MotionDiv>
  );
};

export default Scene4;
