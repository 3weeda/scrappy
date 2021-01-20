import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene5 = ({ transitionData }) => {
  const [step, setStep] = useState(1);
  const percent = (transitionData.percent * 10).toFixed();

  useEffect(() => {
    if (percent < 3) {
      setStep(1);
    } else if (percent >= 3 && percent < 6) {
      setStep(2);
    } else if (percent >= 6) {
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
        <div className={styles.backdrop1} />
        <div className={styles.backdrop2} />
        <div className={styles.characterRight}>
          <img src="/assets/images/scene5/4.png" alt="" />
        </div>
        <div className={styles.backdrop3} />
        <div className={styles.characterLeft}>
          <img src="/assets/images/scene5/3.png" alt="" />
          <div className={styles.hand}>
            <img src="/assets/images/scene5/5.png" alt="" />
          </div>
        </div>
        <Text
          maxW="650"
          bottom="20%"
          withBg
          className={styles.text}
          visible={step === 2}
        >
          After a few years of honing his drawing and writing styles, he would
          cut stencils and go out and paint them in the streets over the
          weekend. Posting these stencils up began to give Scrappy a boosted
          selfconfdence, something teenagers of his age can struggle with.
        </Text>
        <div className={styles.car}>
          <img src="/assets/images/scene5/6.png" alt="" />
        </div>
      </div>
    </MotionDiv>
  );
};

Scene5.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene5;
