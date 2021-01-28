import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const Footer = ({ pageId }) => {
  const current = pageId !== 'intro' ? pageId.slice(-1) : 0;

  return (
    current && (
      <div className={styles.footer}>
        <div className={styles.scenes}>
          <p>
            {`0${current}`}
            <span>/09</span>
          </p>
          <h2>{`Chapter ${current}`}</h2>
        </div>
        {/* <span>09</span> */}
      </div>
    )
  );
};

Footer.propTypes = {
  pageId: PropTypes.string.isRequired,
};

export default Footer;
