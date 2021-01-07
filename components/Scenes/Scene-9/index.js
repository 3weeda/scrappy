import MotionDiv from 'components/MotionDiv';
import styles from './index.module.scss';

const Scene9 = ({ transitionData }) => {
  return (
    <MotionDiv transitionData={transitionData}>
      <div className={styles.section}>
        <div className={styles.text}>
          <p>
            At the end of each school day, Scrappy would walk home from
            class.Carrying with him, all that pent up anxiety about being
            teased.
          </p>
        </div>
        <div className={styles.backdrop} />
      </div>
    </MotionDiv>
  );
};

export default Scene9;
