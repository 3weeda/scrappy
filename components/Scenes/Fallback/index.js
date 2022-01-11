import styles from './index.module.scss';

const Fallback = () => (
  <div className={styles.cont}>
    <div className={styles.note}>
      <h2>
        Full story is not accessible on your screen width. please use a wider
        screen to properly view it!
      </h2>
    </div>
  </div>
);

export default Fallback;
