const request = new XMLHttpRequest();

const LoadSound = soundPath => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const source = audioCtx.createBufferSource();
  const decodedAudioData = {};
  request.open("GET", soundPath, true);
  request.responseType = "arraybuffer";

  const promise1 = new Promise(function(resolve, reject) {
    request.onload = () => {
      const audioData = request.response;

      audioCtx.decodeAudioData(audioData).then(decodedData => {
        resolve(decodedData);
        //source.buffer = decodedData;
        //source.connect(audioCtx.destination);
        console.log(decodedData);
      });
    };
  });

  /*request.onload = () => {
    const audioData = request.response;

    audioCtx.decodeAudioData(audioData).then(decodedData => {
      source.buffer = decodedData;
      source.connect(audioCtx.destination);
      console.log(decodedData);
    });
  };*/

  request.send();

  //promise1.then(decodedData => {
  //  console.log(decodedData);
  //});
  return promise1;
};

const SoundPreloader = sounds => {
  const preloadedSounds = {};

  for (let soundName in sounds) {
    console.log(soundName);

    LoadSound(sounds[soundName]).then(decodedData => {
      preloadedSounds[soundName] = decodedData;
      console.log(preloadedSounds[soundName]);
    });
    //preloadedSounds[soundName] = LoadSound(sounds[soundName]);
    //console.log(preloadedSounds[soundName]);
    //console.warn(LoadSound(sounds[soundName]));
  }

  console.log(preloadedSounds);
  return preloadedSounds;
};

export { SoundPreloader };
