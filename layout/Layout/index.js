import PropTypes from 'prop-types';
import Header from '../Header';
import styles from './index.module.scss';

const Layout = ({ children, hideLogo }) => (
  <main className={styles.main}>
    <Header hideLogo={hideLogo} />
    {children}
  </main>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hideLogo: PropTypes.bool,
};

Layout.defaultProps = {
  hideLogo: false,
};

export default Layout;
