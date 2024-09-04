document.querySelector('button')
.addEventListener('click', (e) => {
    document.querySelector('body').style.backgroundColor = (document.querySelector('body').style.backgroundColor === 'black') ? 'white' : 'black';
})