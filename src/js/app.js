//import { articles , produits } from './template';


const buttonNav= document.querySelector('.nav__barre nav ul');

buttonNav.addEventListener('click', () => {
  document.querySelector('.nav_hidden').classList.toggle('active');
  document.querySelector('.nav__barre img').classList.toggle('active')
} )

const readNext = document.querySelector('.read__next');
var text = 'Lire la suite' ;

readNext.addEventListener('click', () => {
  document.querySelector('.text__description').classList.toggle('active');
  text = (  text === 'Lire la suite'  ?   'Fermer' : 'Lire la suite' )
  console.log(text)
  readNext.innerText = text;
})
