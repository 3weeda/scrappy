import MotionDiv from 'components/MotionDiv';
import styles from './index.module.scss';

const Scene3 = ({ transitionData }) => {
  return (
    <MotionDiv transitionData={transitionData}>
      <div className={styles.section}>
        <div className={styles.backdrop1} />
        <div className={styles.backdrop2} />
        <div className={styles.backdrop3}>
          <div className={styles.glare} />
        </div>
      </div>
    </MotionDiv>
  );
};

export default Scene3;
