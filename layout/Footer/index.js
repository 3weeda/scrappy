/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactSlider from 'react-slider';
import PropTypes from 'prop-types';
import smoothScroll from 'utils/smoothScroll';
import styles from './index.module.scss';

const Footer = ({ pageId }) => {
  const current = pageId !== 'intro' ? pageId.slice(-1) : 0;

  const onChange = (val) => {
    let id = Math.round(val / 10);
    if (id === 0) {
      id = 1;
    } else if (id === 10) {
      id = 9;
    }
    const el = document.getElementById(`scene${id}`);
    console.log(id);
    if (el) {
      smoothScroll(el);
    }
  };

  return (
    current && (
      <div className={styles.footer}>
        <div className={styles.scenes}>
          <div className={styles.counter}>
            <p>
              {`0${current}`}
              <span>/09</span>
            </p>
            <h2>{`Chapter ${current}`}</h2>
            <span>09</span>
          </div>
          <ReactSlider
            className={styles.slider}
            thumbClassName={styles.thumb}
            trackClassName={styles.track}
            renderThumb={(props) => <div {...props} />}
            onChange={(val) => onChange(val)}
            value={(current - 1) * 12.45}
            marks
          />
        </div>
      </div>
    )
  );
};

Footer.propTypes = {
  pageId: PropTypes.string.isRequired,
};

export default Footer;
