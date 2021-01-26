import PropTypes from 'prop-types';
import cx from 'classnames';
import MotionDiv from 'components/shared/MotionDiv';
import UseStepper from 'components/shared/useStepper';
import Text from 'components/shared/Text';
import styles from './index.module.scss';

const Scene8 = ({ transitionData }) => {
  const step = UseStepper(transitionData, [3, 6, 8, 10]);

  return (
    <MotionDiv transitionData={transitionData}>
      <div
        className={cx(styles.section, {
          [styles.stepTwo]: step === 2,
          [styles.stepThree]: step === 3,
          [styles.stepFour]: step === 4,
        })}
      >
        <div className={styles.backdrop} />
        <Text maxW="650" size="35" top="12%" left="26%" visible={step === 3}>
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
