const btn = document.querySelector('button');
let number = 1;
const addDiv = () => {

    let div = document.createElement('div');
    div.textContent = number;
    if (number % 5 === 0) {
        div.classList.add('special');
    }
    number++;
    document.body.appendChild(div);
}


btn.addEventListener('click', addDiv)