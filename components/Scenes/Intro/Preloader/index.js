import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.module.scss';

const Preloader = ({ loading, animateUp }) => (
  <div
    className={cx(
      styles.preloader,
      { [styles.small]: loading === 0 },
      { [styles.above]: animateUp }
    )}
  >
    <div className={styles.logo} style={{ height: `${loading}%` }}>
      <img src="/assets/images/intro/logo-white.png" alt="" />
    </div>
    <div className={styles.logo}>
      <img src="/assets/images/intro/logo-red.png" alt="" />
    </div>
  </div>
);

Preloader.propTypes = {
  loading: PropTypes.number.isRequired,
  animateUp: PropTypes.bool.isRequired,
};

export default Preloader;
