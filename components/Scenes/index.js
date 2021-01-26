import ScrollTransitions from 'react-scroll-transitions';
import Layout from 'layout/Layout';
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
    <ScrollTransitions
      padStart={false}
      padEnd={false}
      transitionOverlap={false}
      transitionSize={0.02}
      // dynamicLoading={false}
      sections={[
        { id: 'intro', height: 1 },
        { id: 'scene1', height: 2 },
        { id: 'scene2', height: 1 },
        { id: 'scene3', height: 0.5 },
        { id: 'scene4', height: 1 },
        { id: 'scene5', height: 1 },
        { id: 'scene6', height: 1 },
        { id: 'scene7', height: 1 },
        { id: 'scene8', height: 2 },
        { id: 'scene9', height: 1 },
      ]}
      render={(id, transitionData) => {
        const Screen = screens[id] || null;

        return (
          <Layout hideLogo={id === 'intro'}>
            <Screen transitionData={transitionData} />
          </Layout>
        );
      }}
    />
  );
};

export default Scenes;
