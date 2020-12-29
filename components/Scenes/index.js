import ScrollTransitions from 'react-scroll-transitions';
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
  };

  return (
    <ScrollTransitions
      sections={[
        { id: 'intro', outTransition: 'easeOut' },
        { id: 'scene1', inTransition: 'easeIn' },
        { id: 'scene2' },
        // { id: 'scene3' },
        // { id: 'scene4' },
        // { id: 'scene5' },
        // { id: 'scene6' },
        // { id: 'scene7' },
        // { id: 'scene8' },
        // { id: 'scene9' },
      ]}
      render={(id, transitionData) => {
        const Screen = screens[id] || null;

        return <Screen transitionData={transitionData} />;
      }}
    />
  );
};

export default Scenes;
