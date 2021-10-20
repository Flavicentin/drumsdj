document.body.addEventListener('keyup', (event) => {
  // console.log(event.code);
  // console.log(event.code.toLowerCase());
  playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () =>{
  let song = document.querySelector('#input').value;
  // console.log("Musica", song);
  if (song !== ''){
    let songArray = song.split('');
    playComposition(songArray);
  }
});

document.querySelector('#q_keyq').addEventListener('click', () =>{
  let sound = "keyq";
  playSound(sound);
});

document.querySelector('#q_keyw').addEventListener('click', () =>{
  let sound = "keyw";
  playSound(sound);
});

document.querySelector('#q_keye').addEventListener('click', () =>{
  let sound = "keye";
  playSound(sound);
});

document.querySelector('#q_keya').addEventListener('click', () =>{
  let sound = "keya";
  playSound(sound);
});

document.querySelector('#q_keys').addEventListener('click', () =>{
  let sound = "keys";
  playSound(sound);
});

document.querySelector('#q_keyd').addEventListener('click', () =>{
  let sound = "keyd";
  playSound(sound);
});

document.querySelector('#q_keyz').addEventListener('click', () =>{
  let sound = "keyz";
  playSound(sound);
});

document.querySelector('#q_keyx').addEventListener('click', () =>{
  let sound = "keyx";
  playSound(sound);
});

document.querySelector('#q_keyc').addEventListener('click', () =>{
  let sound = "keyc";
  playSound(sound);
});

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);
   
  if (audioElement){
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElement){
    // add class css (.key.active)
    keyElement.classList.add('active');

    setTimeout(() =>{
      keyElement.classList.remove('active');
    }, 300);
  }
}

function playComposition(songArray){
  for (let songItem of songArray){
    playSound('')
  }
}

function playComposition(songArray) {
  let wait = 0;

  for (let songItem of songArray){
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);
    wait += 250;
  }
}