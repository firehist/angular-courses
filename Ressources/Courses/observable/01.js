const myElem = document.querySelector('#myElem');

function consoleLogClick(x) {
    console.log(`clicked! ${x}`);
}

myElem.addEventListener('click', consoleLogClick);