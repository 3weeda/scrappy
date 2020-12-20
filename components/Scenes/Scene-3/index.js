import styles from './index.module.scss';

const Scene3 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.backdrop1} />
      <div className={styles.backdrop2} />
      <div className={styles.backdrop3}>
        <div className={styles.glare} />
      </div>
    </div>
  );
};

export default Scene3;
