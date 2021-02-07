/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import UseTransitionStepper from 'components/shared/useTransitionStepper';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene8 = ({ transitionData }) => {
  const {
    currentStep,
    stepTwo,
    stepThree,
    stepFour,
  } = UseTransitionStepper(transitionData, [10, 30, 60, 80, 100]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div
        className={cx(styles.section, {
          [styles.stepTwo]: currentStep !== 1,
        })}
      >
        <div
          className={styles.backdrop}
          style={{
            backgroundSize:
              currentStep === 2
                ? `auto ${100 + 0.4 * stepTwo}%`
                : currentStep === 3
                ? `auto 140%`
                : currentStep === 4
                ? `auto ${140 - 0.4 * stepFour}%`
                : 'auto 100%',
            backgroundPosition:
              currentStep === 3
                ? `${100 - stepThree}% 100%`
                : currentStep === 4
                ? `${0.5 * stepFour}% 100%`
                : currentStep === 5
                ? '50% 100%'
                : '100% 100%',
          }}
        />
        <Text
          maxW="550"
          size="35"
          top="15%"
          left="30%"
          visible={currentStep === 2}
        >
          Around the period when he was stenciling, the city was considering
          defunding the arts program in schools. Scrappy felt this was an
          injustice and unfair to the artists in the community.
        </Text>
      </div>
    </MotionDiv>
  );
};

Scene8.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene8;
