import styles from './index.module.scss';

const Scene1 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.text}>
        <p>
          When a boy is born and becomes adopted he can grow up with a litle bit
          of distrust for the system and feel neglected and unloved by his
          parents who should have shown him unconditional love.
        </p>
      </div>
      {/* <div className={styles.text}>
        <p>
          That young man, Scrappy began to rebel as a tween. Pursuing an outlet
          for his frustration for feeling different, and not fting in with other
          classmates. Always questioning why those that should have been there
          to support him, gave up and sent him away.
        </p>
      </div> */}
      <div className={styles.backdrop1} />
      <div className={styles.backdrop2} />
      <div className={styles.character}>
        <img src="/assets/images/scene1/3.png" />
      </div>
      <div className={styles.people}>
        <img src="/assets/images/scene1/8.png" />
      </div>
    </div>
  );
};

export default Scene1;
