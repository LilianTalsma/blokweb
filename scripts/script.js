// JavaScript Document
console.log("hi");

let deMenuButton = document.querySelector('header > button');
let deWaas = document.querySelector('header div');
let deNav = document.querySelector('header nav');

deMenuButton.addEventListener('click', toggleMenu);
deWaas.addEventListener('click', toggleMenu);

function toggleMenu(){
    deNav.classList.toggle('open');
    deWaas.classList.toggle('open');
  }