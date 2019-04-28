import { articles , produits } from './template';

var nav = `
<section class="nav__barre">
  <nav>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <img src="assets/image/logo-armani.png"  alt="logo">
  </nav>
  <div class="nav_hidden">
    <p>Les montres</p>
    <p>La marque</p>
  </div>
</section>
`;


console.log('ok')
document.body.innerHTML += nav;

const buttonNav= document.querySelector('.nav__barre nav ul');

buttonNav.addEventListener('click', () => {
  document.querySelector('.nav_hidden').classList.toggle('active');
  document.querySelector('.nav__barre img').classList.toggle('active')
} )


