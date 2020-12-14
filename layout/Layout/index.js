import Header from '../Header';
import styles from './index.module.scss';

const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
