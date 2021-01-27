import Footer from 'layout/Footer';
import PropTypes from 'prop-types';
import Header from '../Header';
import styles from './index.module.scss';

const Layout = ({ children, pageId, hideLogo }) => (
  <main className={styles.main}>
    <Header hideLogo={hideLogo} />
    {children}
    <Footer pageId={pageId} />
  </main>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageId: PropTypes.string.isRequired,
  hideLogo: PropTypes.bool,
};

Layout.defaultProps = {
  hideLogo: false,
};

export default Layout;
