// Create button
const createBtn = () => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Swicth Color to black';
    return btn;
}

const btn = createBtn();
document.querySelector('body').appendChild(btn);

document.querySelector('button')
.addEventListener('click', (e) => {
    document.querySelector('body').style.backgroundColor = (document.querySelector('body').style.backgroundColor === 'black') ? 'white' : 'black';
    e.target.textContent = e.target.textContent === 'Swicth Color to black' ? 'Swicth Color to white' : 'Swicth Color to black';
})