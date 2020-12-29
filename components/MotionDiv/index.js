import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const MotionDiv = ({ children }) => {
  return <div className={styles.cover}>{children}</div>;
};

MotionDiv.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MotionDiv;
