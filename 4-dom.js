const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

console.log(keys.length);

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.play();
}

let myName = "Natalia";
const nameSpan = document.getElementById('name');
nameSpan.textContent = myName;
let myAge = 16;
let likesMusic = true;
