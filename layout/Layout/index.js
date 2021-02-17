import Footer from 'layout/Footer';
import PropTypes from 'prop-types';
import Header from '../Header';
import styles from './index.module.scss';

const Layout = ({ children, pageId, hideLogo, playing, toggle }) => (
  <main className={styles.main}>
    <Header hideLogo={hideLogo} playing={playing} toggle={toggle} />
    {children}
    <Footer pageId={pageId} />
  </main>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageId: PropTypes.string.isRequired,
  hideLogo: PropTypes.bool,
  playing: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
};

Layout.defaultProps = {
  hideLogo: false,
  playing: true,
};

export default Layout;
