import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import styles from './index.module.scss';

const Scene6 = ({ transitionData }) => {
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
        {/* <div className={styles.text}>
        <p>
          Scrappy was poor, and in school his classmates would tease and harass
          him about it. He felt bad that his kicks were torn up and generic.
        </p>
      </div> */}
        <div className={styles.backdrop1} />
        <div className={styles.text}>
          <p>
            Around the period when he was stenciling, the city was considering
            defunding the arts program in schools. Scrappy felt this was an
            injustice and unfair to the artists in the community.
          </p>
        </div>
        <div className={styles.character}>
          <img src="/assets/images/scene6/2.png" alt="" />
        </div>
        <div className={styles.secondText}>
          <p>
            Art was in fact a passion of his and a key distraction from his
            daily hardships. In order to bring light to the subject, Scrappy
            spent his nights sketching up ideas and cuting stencils for the
            LARGEST project of his lifetime
          </p>
        </div>
        <div className={styles.secondCharacter}>
          <img src="/assets/images/scene6/2.png" alt="" />
        </div>
      </div>
    </MotionDiv>
  );
};

Scene6.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene6;
