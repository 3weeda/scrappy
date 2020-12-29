import { useState } from 'react';
import MotionDiv from 'components/MotionDiv';
import styles from './index.module.scss';

const Scene6 = ({ transitionData }) => {
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
        {/* <div className={styles.text}>
        <p>
          Scrappy was poor, and in school his classmates would tease and harass
          him about it. He felt bad that his kicks were torn up and generic.
        </p>
      </div> */}
        <div className={styles.backdrop1} />
        {step === 1 ? (
          <>
            <div className={styles.text}>
              <p>
                Around the period when he was stenciling, the city was
                considering defunding the arts program in schools. Scrappy felt
                this was an injustice and unfair to the artists in the
                community.
              </p>
            </div>
            <div className={styles.character}>
              <img src="/assets/images/scene6/2.png" />
            </div>
          </>
        ) : (
          <>
            <div className={styles.secondText}>
              <p>
                Art was in fact a passion of his and a key distraction from his
                daily hardships. In order to bring light to the subject, Scrappy
                spent his nights sketching up ideas and cuting stencils for the
                LARGEST project of his lifetime
              </p>
            </div>
            <div className={styles.secondCharacter}>
              <img src="/assets/images/scene6/2.png" />
            </div>
          </>
        )}
      </div>
    </MotionDiv>
  );
};

export default Scene6;
