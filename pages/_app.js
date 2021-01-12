/* eslint-disable react/jsx-props-no-spreading */
import 'styles/globals.scss';
import PropTypes from 'prop-types';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
