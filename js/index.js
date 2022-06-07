

const chars = "abcdefghijklmnñopqrstuvxyz!#$%&/()=?¿¡[+}1234567890ABCDEFGHIJKLMNÑOPQRSTUVXYZ";
let password = ''; 
const passwordLength = 10;
const input     = document.getElementById('input');
const btnGen    = document.getElementById('btnGen');
const btnCopy   = document.getElementById('copy');
const alerta    = document.getElementById('alert');

btnGen.addEventListener('click', ()=> {
    password = '';

    for(i=0; i<passwordLength; i++) {
    
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    
    input.value = password;
})

btnCopy.addEventListener('click', () => {
    input.select();
    input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(input.value);
    alerta.classList.remove('active');
    setTimeout(()=> {
        alerta.classList.add('active')
    }, 2000);
})










