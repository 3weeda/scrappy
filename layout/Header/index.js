/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.module.scss';

const links = [
  { icon: 'facebook', url: 'https://www.facebook.com' },
  { icon: 'youtube', url: 'https://www.youtube.com' },
  { icon: 'twitter', url: 'https://www.twitter.com' },
  { icon: 'discord', url: 'https://www.discord.com' },
];

const Header = ({ hideLogo, playing, toggle }) => (
  <div className={styles.header}>
    <div className={styles.headerCont}>
      <div className={styles.links}>
        {links.map(({ icon, url }) => (
          <a key={icon} href={url} target="_blank" rel="noreferrer noopener">
            <img src={`/assets/images/icons/${icon}-icon.svg`} alt="" />
          </a>
        ))}
      </div>
      {!hideLogo ? (
        <div className={styles.logo}>
          <img src="/assets/images/intro/logo-red.png" alt="" />
        </div>
      ) : null}
      <div className={styles.options}>
        <div className={styles.text}>
          <div className={styles.greet}>
            <span>Hi there..</span>
            <img src="/assets/images/say-hi.svg" alt="Hi there!" />
          </div>
          <span className={styles.phrase}>Say hi.</span>
        </div>
        <button
          type="button"
          className={cx(styles.sound, { [styles.turnOff]: !playing })}
          onClick={toggle}
        />
      </div>
    </div>
  </div>
);

Header.propTypes = {
  hideLogo: PropTypes.bool,
  playing: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
};

Header.defaultProps = {
  hideLogo: false,
  playing: true,
};

export default Header;
