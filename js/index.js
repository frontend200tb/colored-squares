console.log('start frontend200tb colored squares');


/*****************
Константы
*****************/
const h1 = document.querySelector('.h1');
const playground = document.querySelector('.playground');


/*****************
Переменные
*****************/
const min = 10;
const max = 100;
const squareSize = 10;
let countSquares;
let colors = ['#ff0000', '#800000', '#ffff00', '#808000', '#00ff00', '#008000', '#008080', '#0000ff', '#000080', '#ff00ff', '#800080', '#222222'];


/*****************
Функции
*****************/
function renderBox(count) {
  for (let i = 1; i <= count; i++) {
    let box = document.createElement('div');
    let gameSize = playground.getBoundingClientRect();
    let maxTop = gameSize.height - 10;
    let maxLeft = gameSize.width - 10;
    let randomColorIndex = getRandom(0, colors.length);
    box.style.height = box.style.width = squareSize + 'px';
    box.style.position = 'absolute';
    box.style.backgroundColor = colors[randomColorIndex];
    box.style.top = getRandom(0, maxTop) + 'px';
    box.style.left = getRandom(0, maxLeft) + 'px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', 'true');

    playground.insertAdjacentElement('afterbegin', box)
  }
}

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const start = () => {
  countSquares = getRandom(min, max);
  playground.innerHTML = `${countSquares}`;
  renderBox(countSquares);
}


/*****************
События
*****************/
h1.addEventListener('click', start)

console.log('end frontend200tb colored squares');
