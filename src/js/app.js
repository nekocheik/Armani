const buttonNav= document.querySelector('.nav__barre nav ul');
buttonNav.addEventListener('click', () => {
  document.querySelector('.nav__place').classList.toggle('active');
  document.querySelector('.nav__barre img').classList.toggle('active')
} )