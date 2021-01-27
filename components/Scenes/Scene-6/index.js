import PropTypes from 'prop-types';
import Image from 'next/image';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import UseStepper from 'components/shared/useStepper';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene6 = ({ transitionData }) => {
  const step = UseStepper(transitionData, [5, 9, 10]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div
        className={cx(styles.section, {
          [styles.stepTwo]: step === 2,
          [styles.stepThree]: step === 3,
        })}
      >
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
        <div className={styles.character}>
          <img src="/assets/images/scene6/2.png" alt="" />
        </div>
        <Text
          maxW="600"
          size="35"
          bottom="20%"
          left="10%"
          withBg
          visible={step === 1}
          className={styles.text1}
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
          visible={step === 2}
          className={styles.text2}
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
