import PropTypes from 'prop-types';
import Image from 'next/image';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import UseStepper from 'components/shared/useStepper';
import styles from './index.module.scss';

const Scene7 = ({ transitionData }) => {
  const step = UseStepper(transitionData, [4, 7, 10]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div
        className={cx(styles.section, {
          [styles.stepTwo]: step === 2,
          [styles.stepThree]: step === 3,
        })}
      >
        <div className={styles.backdrop} />
        <div className={styles.characterLeft}>
          <img src="/assets/images/scene7/2.png" alt="" />
        </div>
        <div className={styles.characterRight}>
          <img src="/assets/images/scene7/3.png" alt="" />
        </div>
      </div>
    </MotionDiv>
  );
};

Scene7.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene7;
