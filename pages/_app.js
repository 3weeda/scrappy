/* eslint-disable react/jsx-props-no-spreading */
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import 'styles/globals.scss';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <AnimatedCursor
        innerSize={16}
        outerSize={80}
        color="194, 31, 64"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1.2}
      />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
