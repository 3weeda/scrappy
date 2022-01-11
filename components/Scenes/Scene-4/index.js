/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import Image from 'next/image';
import MotionDiv from 'components/shared/MotionDiv';
import { useTransitionStepper } from 'hooks';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene4 = ({ transitionData }) => {
  const {
    currentStep,
    stepTwo,
    stepFour,
  } = useTransitionStepper(transitionData, [1, 20, 45, 70, 95, 100]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div className={styles.section}>
        <div className={styles.backdrop1}>
          <Text maxW="520" bottom="15%" right="14%" visible={currentStep === 3}>
            At the end of each school day, Scrappy would walk home from class.
            Carrying with him, all that pent up anxiety about being teased.
          </Text>
        </div>
        <div
          className={styles.backdrop2}
          style={{
            transform:
              currentStep === 1
                ? `translateX(-150vh)`
                : currentStep === 2
                ? `translateX(${-150 + 1.5 * stepTwo}vh)`
                : `translateX(0)`,
          }}
        >
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
        <div
          className={styles.backdrop3}
          style={{
            opacity:
              currentStep < 4
                ? '0'
                : currentStep === 4
                ? `${stepFour / 100}`
                : '1',
          }}
        >
          <Text maxW="600" top="25%" left="7%" visible={currentStep >= 4}>
            His walks consisted of crossing train tracks and searching for empty
            spray cans dropped by the older graffiti writers. Finding cans and
            un-blasted spots to paint along the barriers next to the train
            depot, he honed his skills.
          </Text>
        </div>
        <div
          className={styles.backdrop4}
          style={{
            opacity:
              currentStep < 4
                ? '0'
                : currentStep === 4
                ? `${stepFour / 100}`
                : '1',
            transform:
              currentStep < 4
                ? `translate(38%, -50%)`
                : currentStep === 4
                ? `translate(${38 - 0.38 * stepFour}%, ${
                    -50 + 0.5 * stepFour
                  }%)`
                : 'translate(0,0)',
          }}
        >
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
