console.log('Hello! I\'m Crios😊.')

const buttonMenu = document.querySelector('.button-menu');

buttonMenu.addEventListener('click', ()=> {
    if (buttonMenu.classList.contains('button-menu--opened')) {
        buttonMenu.classList.remove('button-menu--opened');
        buttonMenu.classList.add('button-menu--closed');
    } else {
        buttonMenu.classList.add('button-menu--opened');
        buttonMenu.classList.remove('button-menu--closed')
    }
})

document.addEventListener('click', () => {
    if (event.target == buttonMenu || event.target == buttonMenu.children) {
        return
    } else if (buttonMenu.classList.contains('button-menu--closed')) {
        buttonMenu.classList.remove('button-menu--closed');
        buttonMenu.classList.add('button-menu--opened')
    }
})

const buttonSearch = document.querySelector('.search__button');
const search = document.querySelector('.search');

buttonSearch.addEventListener('click', ()=> {
    search.classList.toggle('is-active');
})
