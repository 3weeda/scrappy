import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import styles from './index.module.scss';

const Scene3 = ({ transitionData }) => (
  <MotionDiv transitionData={transitionData}>
    <div
      className={cx(styles.section, {
        [styles.stepTwo]: transitionData.isLeaving,
      })}
    >
      <div className={styles.backdrop1} />
      <div className={styles.backdrop2}>
        <img src="/assets/images/scene3/2-1.png" alt="" />
      </div>
      <div className={styles.backgroundContainer}>
        <div className={styles.backdrop3}>
          <div className={styles.glare} />
        </div>
      </div>
    </div>
  </MotionDiv>
);

Scene3.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene3;
