import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene6 = ({ transitionData }) => {
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
        })}
      >
        <div className={styles.backdrop} />
        <div className={styles.character}>
          <img src="/assets/images/scene6/2.png" alt="" />
        </div>
        <Text
          maxW="800"
          size="35"
          bottom="25%"
          left="10%"
          withBg
          visible={step === 1}
        >
          Around the period when he was stenciling, the city was considering
          defunding the arts program in schools. Scrappy felt this was an
          injustice and unfair to the artists in the community.
        </Text>
        <Text
          maxW="700"
          size="35"
          top="15%"
          right="5%"
          withBg
          visible={step === 2}
        >
          Art was in fact a passion of his and a key distraction from his daily
          hardships. In order to bring light to the subject, Scrappy spent his
          nights sketching up ideas and cuting stencils for the LARGEST project
          of his lifetime
        </Text>
      </div>
    </MotionDiv>
  );
};

Scene6.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene6;
