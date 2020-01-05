const SoundManager = (soundSource, isLoop = false) => {
  const audio = new Audio(soundSource);
  audio.loop = isLoop;
  audio.play();

  return audio;
};

export { SoundManager };
