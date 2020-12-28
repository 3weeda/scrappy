import styles from './index.module.scss';

const Scene5 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.text}>
        <p>
          After a few years of honing his drawing and writing styles, he would
          cut stencils and go out and paint them in the streets over the
          weekend. Posting these stencils up began to give Scrappy a boosted
          selfconfdence, something teenagers of his age can struggle with.
        </p>
      </div>
      <div className={styles.backdrop1} />
      <div className={styles.backdrop2} />
      <div className={styles.characterRight}>
        <img src="/assets/images/scene5/4.png" />
      </div>
      <div className={styles.backdrop3} />
      <div className={styles.characterLeft}>
        <img src="/assets/images/scene5/3-1.png" />
      </div>
      {/* <div className={styles.characterLeft}>
        <img src="/assets/images/scene5/3-2.png" />
      </div> */}
    </div>
  );
};

export default Scene5;
