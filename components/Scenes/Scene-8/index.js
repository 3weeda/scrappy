/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
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
  } = UseTransitionStepper(transitionData, [10, 30, 60, 80, 90, 100]);

  const bgStyle = {
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
        : currentStep >= 5
        ? '50% 100%'
        : '100% 100%',
  };

  return (
    <MotionDiv transitionData={transitionData}>
      <div className={styles.section}>
        <div className={styles.backdrop1} style={bgStyle} />
        <div
          className={styles.clouds}
          style={{
            width:
              currentStep === 2
                ? `${115 + 0.4 * stepTwo}%`
                : currentStep === 3
                ? '155%'
                : currentStep === 4
                ? `${155 - 0.4 * stepFour}%`
                : '115%',
            top:
              currentStep === 2
                ? `${7 - 0.37 * stepTwo}%`
                : currentStep === 3
                ? '-30%'
                : currentStep === 4
                ? `${-30 + 0.37 * stepFour}%`
                : '7%',
            right:
              currentStep === 3
                ? `${-0.1 * stepThree}%`
                : currentStep === 4
                ? `${-10 + 0.15 * stepFour}%`
                : '5%',
            animationPlayState: currentStep >= 5 ? 'running' : 'paused',
          }}
        >
          <img src="/assets/images/scene8/3.png" alt="" />
        </div>
        <div className={styles.backdrop2} style={bgStyle} />
        <div
          className={styles.backdrop3}
          style={{
            ...bgStyle,
            opacity:
              currentStep > 2
                ? '1'
                : currentStep === 2
                ? `${stepTwo / 100}`
                : '0',
          }}
        />
        <div
          className={styles.crowd}
          style={{
            width:
              currentStep === 2
                ? `${680 + 2.2 * stepTwo}px`
                : currentStep === 3
                ? '900px'
                : currentStep === 4
                ? `${900 - 2.2 * stepFour}px`
                : '680px',
            bottom:
              currentStep === 2
                ? `${8 + 0.05 * stepTwo}%`
                : currentStep === 3
                ? '13%'
                : currentStep === 4
                ? `${13 - 0.05 * stepFour}%`
                : '8%',
            left:
              currentStep === 1
                ? '8%'
                : currentStep === 2
                ? `${8 - 0.38 * stepTwo}%`
                : currentStep === 3
                ? `${-30 + 0.38 * stepThree}%`
                : currentStep === 4
                ? `${8 - 0.05 * stepFour}%`
                : '3%',
          }}
        >
          <div
            style={{
              animationPlayState: currentStep >= 5 ? 'running' : 'paused',
            }}
          >
            <img src="/assets/images/scene8/4.png" alt="" />
          </div>
          <div>
            <img src="/assets/images/scene8/5.png" alt="" />
          </div>
        </div>
        <div
          className={styles.character}
          style={{
            height:
              currentStep === 2
                ? `${20 + 0.05 * stepTwo}%`
                : currentStep === 3
                ? '25%'
                : currentStep === 4
                ? `${25 - 0.05 * stepFour}%`
                : '20%',
            bottom:
              currentStep === 2
                ? `${13 + 0.05 * stepTwo}%`
                : currentStep === 3
                ? '18%'
                : currentStep === 4
                ? `${18 - 0.05 * stepFour}%`
                : '13%',
            right:
              currentStep === 1
                ? '1%'
                : currentStep === 2
                ? `${1 + 0.13 * stepTwo}%`
                : currentStep === 3
                ? `${14 - 0.54 * stepThree}%`
                : currentStep === 4
                ? `${-40 + 0.48 * stepFour}%`
                : '8%',
          }}
        >
          <img src="/assets/images/scene8/6.png" alt="" />
        </div>
        <Text
          maxW="550"
          size="35"
          top="15%"
          left="30%"
          visible
          style={{
            opacity:
              currentStep === 2
                ? `${stepTwo / 100}`
                : currentStep === 3
                ? `${1 - stepThree / 100}`
                : '0',
          }}
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
