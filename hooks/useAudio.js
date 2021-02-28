import { useState, useEffect } from 'react';

const useAudio = (url) => {
  const aud = typeof Audio !== 'undefined' && new Audio(url);
  const [audio] = useState(aud);
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [{ playing, toggle }];
};

export default useAudio;
