/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import Image from 'next/image';
import MotionDiv from 'components/shared/MotionDiv';
import UseTransitionStepper from 'components/shared/useTransitionStepper';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene6 = ({ transitionData }) => {
  const { currentStep, stepTwo } = UseTransitionStepper(transitionData, [
    10,
    90,
    95,
    100,
  ]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div className={styles.section}>
        <div className={styles.backdrop}>
          <Image
            src="/assets/images/scene6/1.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="bottom right"
            loading="eager"
            quality={100}
          />
        </div>
        <div
          className={styles.character}
          style={{
            transform:
              currentStep < 2
                ? `translate(0,0) scale(1)`
                : currentStep === 2
                ? `translate(${-0.7 * stepTwo}%, ${0.18 * stepTwo}%) scale(${
                    1 - 0.0045 * stepTwo
                  })`
                : `translate(-70%, 18%) scale(0.55)`,
          }}
        >
          <img src="/assets/images/scene6/2.png" alt="" />
        </div>
        <Text
          maxW="600"
          size="35"
          bottom="20%"
          left="10%"
          withBg
          visible
          className={styles.text1}
          style={{
            transition: '0.2s',
            opacity:
              currentStep === 2
                ? `${1 - stepTwo / 100}`
                : currentStep >= 3
                ? '0'
                : '1',
            transform:
              currentStep === 1
                ? 'translateX(20%)'
                : currentStep === 2
                ? `translateX(${20 - 0.2 * stepTwo}%)`
                : 'translateX(0)',
          }}
        >
          Around the period when he was stenciling, the city was considering
          defunding the arts program in schools. Scrappy felt this was an
          injustice and unfair to the artists in the community.
        </Text>
        <Text
          maxW="600"
          size="35"
          top="25%"
          right="5%"
          withBg
          visible
          className={styles.text2}
          style={{
            opacity:
              currentStep === 2
                ? `${stepTwo / 100}`
                : currentStep >= 3
                ? '1'
                : '0',
            transform:
              currentStep < 2
                ? 'translateX(100%)'
                : currentStep === 2
                ? `translateX(${100 - 1.1 * stepTwo}%)`
                : 'translateX(-10%)',
          }}
        >
          Art was in fact a passion of his and a key distraction from his daily
          hardships. In order to bring light to the subject, Scrappy spent his
          nights sketching up ideas and cuting stencils for the LARGEST project
          of his lifetime
        </Text>
      </div>
    </MotionDiv>
  );
};

Scene6.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene6;
