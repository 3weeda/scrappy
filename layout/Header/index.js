import React, { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.scss';

const links = [
  { icon: 'facebook', url: 'www.facebook.com' },
  { icon: 'youtube', url: 'www.youtube.com' },
  { icon: 'twitter', url: 'www.twitter.com' },
  { icon: 'discord', url: 'www.discord.com' },
];

const index = () => {
  const [soundOn, setSoundOn] = useState(true);

  const toggleSound = () => {
    setSoundOn(!soundOn);
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerCont}>
        <div className={styles.links}>
          {links.map(({ icon, url }) => (
            <a key={icon} href={url} target="_blank" rel="noreferrer noopener">
              <img src={`/assets/images/icons/${icon}-icon.svg`} alt="" />
            </a>
          ))}
        </div>
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
            className={cx(styles.sound, { [styles.turnOff]: soundOn })}
            onClick={toggleSound}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
