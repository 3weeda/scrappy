import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.module.scss';

const Preloader = ({ loading, transition }) => {
  const [zeroTransition, setZeroTransition] = useState(false);

  useEffect(() => {
    if (loading === 0) {
      setTimeout(() => {
        setZeroTransition(true);
      }, 1000);
    }
  }, [loading]);

  return (
    <div
      className={cx(styles.preloader, { [styles.small]: loading === 0 })}
      style={{
        transform: transition && `translateY(${-1.1 * transition}px)`,
        transition: zeroTransition && '0.2s',
      }}
    >
      <div className={styles.logo} style={{ height: `${loading}%` }}>
        <img
          src="/assets/images/intro/logo-white.png"
          alt=""
          style={{
            width: transition ? `${500 - transition * 3.1}px` : '500px',
          }}
        />
      </div>
      <div className={styles.logo}>
        <img
          src="/assets/images/intro/logo-red.png"
          alt=""
          style={{
            width: transition ? `${500 - transition * 3.1}px` : '500px',
          }}
        />
      </div>
    </div>
  );
};

Preloader.propTypes = {
  loading: PropTypes.number.isRequired,
  transition: PropTypes.number.isRequired,
};

export default Preloader;
