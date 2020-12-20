import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.module.scss';

const Preloader = ({ loading, animateOut }) => {
  return (
    <div
      className={cx(
        styles.preloader,
        { [styles.small]: loading === 0 },
        { [styles.above]: animateOut }
      )}
    >
      <div className={styles.logo} style={{ height: `${loading}%` }}>
        <img src="/assets/images/logo-white.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="/assets/images/logo-red.png" alt="" />
      </div>
    </div>
  );
};

Preloader.propTypes = {
  loading: PropTypes.number.isRequired,
  animateOut: PropTypes.bool.isRequired,
};

export default Preloader;
