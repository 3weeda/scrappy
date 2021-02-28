import { useEffect, useState } from 'react';
import ScrollTransitions from 'react-scroll-transitions';
import Sound from 'react-sound';
import Layout from 'layout/Layout';
import useAudio from 'hooks/useAudio';
import Intro from './Intro';
import Scene1 from './Scene-1';
import Scene2 from './Scene-2';
import Scene3 from './Scene-3';
import Scene4 from './Scene-4';
import Scene5 from './Scene-5';
import Scene6 from './Scene-6';
import Scene7 from './Scene-7';
import Scene8 from './Scene-8';
import Scene9 from './Scene-9';

const Scenes = () => {
  const [loading, setLoading] = useState(100);
  const [allPlaying, setAllPlaying] = useState(false);
  const toggleLoop = () => setAllPlaying(!allPlaying);
  const [{ playing: clickPlaying, toggle: toggleClick }] = useAudio(
    '/assets/audio/click.ogg'
  );

  useEffect(() => {
    let intervalId;
    if (loading) {
      intervalId = setInterval(() => {
        setLoading(loading - 1);
      }, 50);
    }
    document.body.setAttribute(
      'style',
      `${
        loading
          ? 'overflow: hidden; max-height: 100vh;'
          : 'overflow: unset; max-height: unset;'
      }`
    );
    return () => {
      clearInterval(intervalId);
      document.body.setAttribute(
        'style',
        'overflow: unset; max-height: unset;'
      );
    };
  }, [loading]);

  useEffect(() => {
    if (allPlaying) document.addEventListener('click', toggleClick);
    return () => {
      document.removeEventListener('click', toggleClick);
    };
  }, [clickPlaying, allPlaying]);

  const screens = {
    intro: Intro,
    scene1: Scene1,
    scene2: Scene2,
    scene3: Scene3,
    scene4: Scene4,
    scene5: Scene5,
    scene6: Scene6,
    scene7: Scene7,
    scene8: Scene8,
    scene9: Scene9,
  };

  return (
    <>
      <ScrollTransitions
        padStart={false}
        padEnd={false}
        transitionSize={0.1}
        dynamicLoading={false}
        sections={[
          { id: 'intro', height: 2 },
          { id: 'scene1', height: 3 },
          { id: 'scene2', height: 3 },
          { id: 'scene3', height: 1 },
          { id: 'scene4', height: 2 },
          { id: 'scene5', height: 3 },
          { id: 'scene6', height: 2 },
          { id: 'scene7', height: 2 },
          { id: 'scene8', height: 4 },
          { id: 'scene9', height: 1 },
        ]}
        render={(id, transitionData) => {
          const Screen = screens[id] || null;
          const current = document.getElementById(id);
          const index = id !== 'intro' ? id.slice(-1) : 0;

          if (current) {
            current.style.zIndex = 10 - index;

            if (!transitionData.isVisible) {
              current.style.opacity = '0';
              current.firstChild.style.display = 'none';
            } else {
              current.style.opacity = '1';
              current.firstChild.style.display = 'block';
            }
          }

          return (
            <>
              <Layout
                pageId={id}
                hideLogo={id === 'intro'}
                playing={transitionData.isVisible && allPlaying}
                toggle={toggleLoop}
              >
                <Screen transitionData={transitionData} loading={loading} />
              </Layout>
            </>
          );
        }}
      />
      <Sound
        url="/assets/audio/loop.ogg"
        playStatus={Sound.status[allPlaying ? 'PLAYING' : 'PAUSED']}
        loop
      />
    </>
  );
};

export default Scenes;
