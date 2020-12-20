import PropTypes from 'prop-types';
import Header from '../Header';
import styles from './index.module.scss';

const Layout = ({ children, hideHeader }) => (
  <main className={styles.main}>
    {!hideHeader ? <Header /> : null}
    {children}
  </main>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hideHeader: PropTypes.bool,
};

Layout.defaultProps = {
  hideHeader: false,
};

export default Layout;
