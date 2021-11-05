// import functions and grab DOM elements
const peacockAudio = document.getElementById('peacock');
const peacockImg = document.getElementById('peacock-img');
const llamaAudio = document.getElementById('llama');
const llamaImg = document.getElementById('llama-img');
const donkeyAudio = document.getElementById('donkey');
const donkeyImg = document.getElementById('donkey-img');
const clickedOnElem = document.getElementById('clicked-on');
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
peacockImg.addEventListener('click', () => {
  peacockAudio.play;
  // console.log(peacockImg);
  clickedOnElem.textContent = 'peacock';
});

llamaImg.addEventListener('click', () => {
  llamaAudio.play;

  clickedOnElem.textContent = 'llama';
});

donkeyImg.addEventListener('click', () => {
  donkeyAudio.play;

  clickedOnElem.textContent = 'donkey';
});