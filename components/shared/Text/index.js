import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.module.scss';

const Text = ({
  children,
  size,
  line,
  top,
  bottom,
  left,
  right,
  maxW,
  visible,
  withBg,
}) => (
  <div
    className={cx(styles.text, { [styles.withBg]: withBg })}
    style={{
      fontSize: `${size}px`,
      lineHeight: `${line}px`,
      maxWidth: `${maxW}px`,
      opacity: visible ? '1' : '0',
      top,
      bottom,
      left,
      right,
    }}
  >
    <span>{children}</span>
  </div>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  line: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  maxW: PropTypes.string,
  withBg: PropTypes.bool,
  visible: PropTypes.bool,
};

Text.defaultProps = {
  size: '40',
  line: '55',
  top: 'unset',
  bottom: 'unset',
  left: 'unset',
  right: 'unset',
  maxW: '610',
  withBg: false,
  visible: false,
};

export default Text;
