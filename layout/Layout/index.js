import Footer from 'layout/Footer';
import PropTypes from 'prop-types';
import Header from '../Header';
import styles from './index.module.scss';

const Layout = ({ children, pageId, hideLogo, playing, toggle }) => (
  <main className={styles.main}>
    <Header hideLogo={hideLogo} playing={playing} toggle={toggle} />
    {children}
    {pageId ? <Footer pageId={pageId} /> : null}
  </main>
);

Layout.propTypes = {
  pageId: PropTypes.string,
  hideLogo: PropTypes.bool,
  playing: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  pageId: null,
  hideLogo: false,
  playing: true,
};

export default Layout;
