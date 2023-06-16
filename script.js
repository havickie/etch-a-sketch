'use strict';

const container = document.querySelector('#wrapper');
const btnSection = document.querySelector('.section');
document.body.onload = showSmallDivs;
function showSmallDivs() {
  for (let i = 0; i < 1024; i++) {
    createSmallDivs();
  }
}
function showMediumDivs() {
  for (let i = 0; i < 256; i++) {
    createMediumDivs();
  }
}


function removeSmallDiv() {
  document.querySelectorAll('.smalls').forEach((div) => div.remove());
}
function removeMediumDivs() {
  document.querySelectorAll('.mediums').forEach((div) => div.remove());
}
function removeLargeDivs() {
  document.querySelectorAll('.larges').forEach((div) => div.remove());
}

btnSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('small')) {
    removeSmallDiv();
    removeMediumDivs();
    showSmallDivs();
  }
  if (e.target.classList.contains('medium')) {
 removeSmallDiv();
 removeMediumDivs();
    showMediumDivs();
  }
  if (e.target.classList.contains('black')) {
   document.querySelectorAll('.smalls').forEach((div) => div.);
  }
  if (e.target.classList.contains('green')) {
    console.log('clicked');
  }
  if (e.target.classList.contains('rainbow')) {
    console.log('clicked');
  }
  if (e.target.classList.contains('erase')) {
    console.log('clicked');
  }
  if (e.target.classList.contains('reset')) {
    console.log('reset');
  }
});



function createSmallDivs() {
  let newDiv = document.createElement('div');
  newDiv.classList.add('smalls');
  container.appendChild(newDiv);
}
function createMediumDivs() {
  let newDiv = document.createElement('div');
  newDiv.classList.add('mediums');
  container.appendChild(newDiv);
}

