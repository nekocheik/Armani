//import { articles , produits } from './template';


const buttonNav= document.querySelector('.nav__barre nav ul');

buttonNav.addEventListener('click', () => {
  document.querySelector('.nav_hidden').classList.toggle('active');
  document.querySelector('.nav__barre img').classList.toggle('active')
} )

const readNext = document.querySelector('.read__next');
let text = 'Lire la suite' ;

readNext.addEventListener('click', () => {
  document.querySelector('.text__description').classList.toggle('active');
  text = (  text === 'Lire la suite'  ?   'Fermer' : 'Lire la suite' )
  console.log(text)
  readNext.innerText = text;
})


const caroussel = document.querySelectorAll('#page__produit .picture img')
const selectPictures = document.querySelectorAll('#page__produit .squares section')

for (let i = 0; i < selectPictures.length; i++) {
  let selectPicture = selectPictures[i];
  selectPicture.addEventListener('click',() => {
    for (let i = 0; i < selectPictures.length; i++) {
      selectPictures[i].className = '';
      caroussel[i].className = '';
    }
    caroussel[i].className = 'active';
    selectPicture.className = 'active';
  })
}

var rellaxs = require('rellax');

var rellax = new rellaxs('.cercle', {
  speed: -2,
  center: true,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});