import PropTypes from 'prop-types';
import Image from 'next/image';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import UseStepper from 'components/shared/useStepper';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene5 = ({ transitionData }) => {
  const step = UseStepper(transitionData, [3, 6, 10]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div
        className={cx(styles.section, {
          [styles.stepTwo]: step === 2,
          [styles.stepThree]: step === 3,
        })}
      >
        <div className={styles.backdrop1}>
          <Image
            src="/assets/images/scene5/1.jpg"
            alt=""
            layout="fill"
            loading="eager"
          />
        </div>
        <div className={styles.backdrop2}>
          <Image
            src="/assets/images/scene5/2-1.jpg"
            alt=""
            layout="fill"
            loading="eager"
          />
        </div>
        <div className={styles.characterRight}>
          <img src="/assets/images/scene5/4.png" alt="" />
        </div>
        <div className={styles.backdrop3}>
          <Image
            src="/assets/images/scene5/2-2.png"
            alt=""
            layout="fill"
            loading="eager"
          />
        </div>
        <div className={styles.characterLeft}>
          <img src="/assets/images/scene5/3.png" alt="" />
          <div className={styles.hand}>
            <img src="/assets/images/scene5/5.png" alt="" />
          </div>
        </div>
        <Text
          maxW="650"
          bottom="20%"
          withBg
          className={styles.text}
          visible={step === 2}
        >
          After a few years of honing his drawing and writing styles, he would
          cut stencils and go out and paint them in the streets over the
          weekend. Posting these stencils up began to give Scrappy a boosted
          selfconfdence, something teenagers of his age can struggle with.
        </Text>
        <div className={styles.car}>
          <img src="/assets/images/scene5/6.png" alt="" />
        </div>
      </div>
    </MotionDiv>
  );
};

Scene5.propTypes = {
  transitionData: PropTypes.object.isRequired,
};

export default Scene5;
