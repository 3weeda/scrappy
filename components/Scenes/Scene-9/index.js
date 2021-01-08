import PropTypes from 'prop-types';
import MotionDiv from 'components/MotionDiv';
import styles from './index.module.scss';

const Scene9 = ({ transitionData }) => (
  <MotionDiv transitionData={transitionData} noLeaving>
    <div className={styles.section}>
      <div className={styles.text}>
        <p>
          At the end of each school day, Scrappy would walk home from
          class.Carrying with him, all that pent up anxiety about being teased.
        </p>
      </div>
      <div className={styles.backdrop} />
    </div>
  </MotionDiv>
);

Scene9.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene9;
