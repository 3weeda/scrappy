import PropTypes from 'prop-types';
import Image from 'next/image';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import UseStepper from 'components/shared/useStepper';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene4 = ({ transitionData }) => {
  const step = UseStepper(transitionData, [5, 10]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div
        className={cx(styles.section, {
          [styles.stepTwo]: step === 2,
          [styles.stepThree]: transitionData.isLeaving,
        })}
      >
        <div className={styles.backdrop1}>
          <Text maxW="520" bottom="15%" right="14%" visible={step === 1}>
            At the end of each school day, Scrappy would walk home from class.
            Carrying with him, all that pent up anxiety about being teased.
          </Text>
        </div>
        <div className={styles.backdrop2}>
          <Image
            src="/assets/images/scene4/1.png"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="bottom right"
            loading="eager"
            quality={100}
          />
        </div>
        <div className={styles.backdrop3}>
          <Text maxW="600" top="25%" left="7%" visible={step === 2}>
            His walks consisted of crossing train tracks and searching for empty
            spray cans dropped by the older graffiti writers. Finding cans and
            un-blasted spots to paint along the barriers next to the train
            depot, he honed his skills.
          </Text>
        </div>
        <div className={styles.backdrop4}>
          <img src="/assets/images/scene4/3.png" alt="" />
        </div>
      </div>
    </MotionDiv>
  );
};

Scene4.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene4;
