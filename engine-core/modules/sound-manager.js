import { GetDirectState, SetState } from "../main.js";

const SoundManager = (soundName, isLoop = false) => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const audioSource = audioCtx.createBufferSource();
  const preloadedSound = GetDirectState().preloadedSounds[soundName];
  const foo = () => {
    console.log("1000 waited", preloadedSound);
  };
  setTimeout(foo, 1000);

  console.log(preloadedSound);
  console.log(GetDirectState().preloadedSounds);
  preloadedSound.then(function(value) {
    console.log("value", value);

    audioSource.buffer = value;
    audioSource.connect(audioCtx.destination);
    audioSource.loop = isLoop;
    audioSource.start(0);
    console.log(audioSource);
  });
  //audioSource.buffer = preloadedAudioNode.buffer;

  //audioSource.connect(audioCtx.destination);
  console.log(audioSource);

  //audioSource.loop = isLoop;
  //audioSource.start(0);

  return audioSource;
};

export { SoundManager };
