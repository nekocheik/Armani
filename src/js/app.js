const buttonNav= document.querySelector('.nav__barre nav ul');
buttonNav.addEventListener('click', () => {
  document.querySelector('.nav_hidden').classList.toggle('active');
  document.querySelector('.nav__barre img').classList.toggle('active')
} )