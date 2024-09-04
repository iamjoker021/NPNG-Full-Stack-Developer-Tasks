const calcFn = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => {
        if (num2 === 0) {
            return 'infinity';
        }
        return num1 / num2;
    },
}

const createInp = (text, name) => {
    const inp = document.createElement('input');
    inp.type = 'number';
    inp.placeholder = text;
    inp.step = 0.01;
    inp.required = true;
    inp.name = name;
    inp.id = name;
    return inp;
}

const createBtn = (symbol) => {
    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.textContent = symbol;
    btn.onclick = () => {
        const num1 = parseFloat(document.querySelector('#num1').value);
        const num2 = parseFloat(document.querySelector('#num2').value);
        const result = calcFn[symbol](num1, num2);

        const resultCont = document.querySelector('.result p');
        if (!(result || result === 0)) {
            resultCont.textContent = 'Please enter valid data for num1 and num2'
        }
        else {
            const symMeaning = {
                '+': 'addition',
                '-': 'subtraction',
                '*': 'Multiplication',
                '/': 'Division'
            }
            resultCont.innerHTML = `
            Operation performed: ${symMeaning[symbol]} <br>
            The Num1 is ${num1} <br>
            The Num2 is ${num2} <br>
            The result is ${result}
            `
        }
    }
    return btn
}

const body = document.querySelector('body');

const form = document.createElement('form');
body.appendChild(form);

const inpCont = document.createElement('div');
inpCont.classList.add('input-container');
inpCont.appendChild(createInp('Enter your first number', 'num1'));
inpCont.appendChild(createInp('Enter your second number', 'num2'));
form.appendChild(inpCont);

const btnCont = document.createElement('div');
btnCont.classList.add('btn-container');
btnCont.appendChild(createBtn('+'));
btnCont.appendChild(createBtn('-'));
btnCont.appendChild(createBtn('*'));
btnCont.appendChild(createBtn('/'));
form.appendChild(btnCont);

const resultCont = document.createElement('div');
resultCont.classList.add('result');
const resultPara = document.createElement('p');
resultCont.appendChild(resultPara);
body.appendChild(resultCont);

form.addEventListener('submit', e => {
    e.preventDefault();
})