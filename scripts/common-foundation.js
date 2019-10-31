$(document).foundation();

const buttonMenu = document.querySelector('.button-menu');

buttonMenu.addEventListener('click', () => {
    if (buttonMenu.classList.contains('button-menu--opened')) {
        buttonMenu.classList.remove('button-menu--opened');
        buttonMenu.classList.add('button-menu--closed');
    } else {
        buttonMenu.classList.add('button-menu--opened');
        buttonMenu.classList.remove('button-menu--closed')
    }
})
