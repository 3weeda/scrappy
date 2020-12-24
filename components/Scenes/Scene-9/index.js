import styles from './index.module.scss';

const Scene9 = () => {
  return (
    <div className={styles.section}>
      {/* <div className={styles.text}>
        <p>
          Scrappy was poor, and in school his classmates would tease and harass
          him about it. He felt bad that his kicks were torn up and generic.
        </p>
      </div> */}
      <div className={styles.text}>
        <p>
          All he wanted to rock were the same shoes as his skateboard heroes,
          and the popular kids in his class.
        </p>
      </div>
      <div className={styles.backdrop1} />
      <div className={styles.peopleRight}>
        <img src="/assets/images/scene9/3.png" />
      </div>
      <div className={styles.peopleLeft}>
        <img src="/assets/images/scene9/2.png" />
      </div>
      <div className={styles.backdrop2} />
    </div>
  );
};

export default Scene9;
