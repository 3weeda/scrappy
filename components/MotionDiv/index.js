import PropTypes from 'prop-types';
import styles from './index.module.scss';

const MotionDiv = ({ children, transitionData, noEntering, noLeaving }) => {
  const {
    percent,
    transitionPercent,
    isVisible,
    isLeaving,
    isEntering,
    leavingPercent,
    enteringPercent,
  } = transitionData;

  return (
    <div
      className={styles.cover}
      style={{
        opacity: isLeaving
          ? leavingPercent && !noLeaving
          : isEntering && !noEntering
          ? enteringPercent
          : 1,
      }}
    >
      {children}
    </div>
  );
};

MotionDiv.propTypes = {
  children: PropTypes.node.isRequired,
  transitionData: PropTypes.object.isRequired,
  noEntering: PropTypes.bool,
  noLeaving: PropTypes.bool,
};

MotionDiv.defaultValues = {
  noEntering: false,
  noLeaving: false,
};

export default MotionDiv;
