
const geneateOTP = (length=6) => {
    const words = 'qwertyuiopasdfghjklzxcvbnm'.split('');

    const otp = []
    for (let index = 0; index < length; index++) {
        if (Math.random() > 0.5 ){
            otp.push(Math.round(Math.random() * 9));
        }
        else {
            otp.push(words[Math.round(Math.random() * 26)])
        }
    }

    return otp.join('')
}

const createBtn = () => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Generate a random OTP';
    btn.addEventListener('click', () => {
        const resultPara = document.querySelector('p');
        const result = geneateOTP();
        resultPara.textContent = result;
    })
    return btn
}

const body = document.querySelector('body');
body.appendChild(createBtn());

const resultPara = document.createElement('p');
body.appendChild(resultPara);
