import PropTypes from 'prop-types';
import MotionDiv from 'components/shared/MotionDiv';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene9 = ({ transitionData }) => (
  <MotionDiv transitionData={transitionData} noLeaving>
    <div className={styles.section}>
      <div className={styles.backdrop} />
      <img src="/assets/images/scene9/3.png" alt="" />
      <Text maxW="575" bottom="22%" right="10%" withBg visible>
        At the end of each school day, Scrappy would walk home from class.
        Carrying with him, all that pent up anxiety about being teased.
      </Text>
    </div>
  </MotionDiv>
);

Scene9.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene9;
