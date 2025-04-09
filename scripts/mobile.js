const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const stuff = document.querySelector('.stuff');//select the .stuff division

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

	//Toggle the visibility of .stuff when the menu is opened/closed
	stuff.classList.toggle('visible');
});