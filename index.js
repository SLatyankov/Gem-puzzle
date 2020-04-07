const HEADER = document.createElement('div');
HEADER.className = 'header';
const BATTONS = document.createElement('div');
BATTONS.className = 'battons';
const PANEL = document.createElement('div');
PANEL.className = 'panel';
const FIELD = document.createElement('div');
FIELD.className = 'field';
FIELD.id = 'field';
const DESCRIPTION = document.createElement('p');
DESCRIPTION.className = 'description';
DESCRIPTION.textContent = 'Размер поля 3х3';
const FOOTER = document.createElement('div');
FOOTER.className = 'footer';
FOOTER.id = 'footer';

document.body.append(HEADER);
document.body.append(BATTONS);
document.body.append(PANEL);
document.body.append(FIELD);
document.body.append(DESCRIPTION);
document.body.append(FOOTER);

const MIXENDSTART = document.createElement('batton');
MIXENDSTART.textContent = 'Размешать и начать';
MIXENDSTART.className = 'batton';
MIXENDSTART.id = 'mixEndStart';
const STOP = document.createElement('batton');
STOP.textContent = 'Стоп';
STOP.className = 'batton stop';
STOP.id = 'stop';
const SAVE = document.createElement('batton');
SAVE.textContent = 'Сохранить';
SAVE.className = 'batton';
SAVE.id = 'save';
const RESULT = document.createElement('batton');
RESULT.textContent = 'Результат';
RESULT.className = 'batton';
RESULT.id = 'result';

BATTONS.append(MIXENDSTART);
BATTONS.append(STOP);
BATTONS.append(SAVE);
BATTONS.append(RESULT);

const COUNTER = document.createElement('span');
COUNTER.className = 'counter text';
COUNTER.textContent = 'Количество ходов';
const COUNT = document.createElement('span');
COUNT.className = 'count score';
COUNT.textContent = '0';
const TIMER = document.createElement('span');
TIMER.className = 'timer text';
TIMER.textContent = 'Время';
const TIME = document.createElement('span');
TIME.className = 'time score';
TIME.textContent = '0';

PANEL.append(COUNTER);
PANEL.append(COUNT);
PANEL.append(TIMER);
PANEL.append(TIME);

const CHOICE = document.createElement('span');
CHOICE.className = 'choice';
CHOICE.textContent = 'Другие размеры';
const THREE = document.createElement('batton');
THREE.textContent = '3x3';
THREE.className = 'size';
THREE.id = 'tree';
const FOUR = document.createElement('batton');
FOUR.textContent = '4x4';
FOUR.className = 'size';
FOUR.id = 'four';
const FIVE = document.createElement('batton');
FIVE.textContent = '5x5';
FIVE.className = 'size';
FIVE.id = 'five';
const SIX = document.createElement('batton');
SIX.textContent = '6x6';
SIX.className = 'size';
SIX.id = 'six';
const SEVEN = document.createElement('batton');
SEVEN.textContent = '7x7';
SEVEN.className = 'size';
SEVEN.id = 'seven';
const EIGHT = document.createElement('batton');
EIGHT.textContent = '8x8';
EIGHT.className = 'size';
EIGHT.id = 'eight';

FOOTER.append(CHOICE);
FOOTER.append(THREE);
FOOTER.append(FOUR);
FOOTER.append(FIVE);
FOOTER.append(SIX);
FOOTER.append(SEVEN);
FOOTER.append(EIGHT);

let length = 9;
let array = mixed(length);

fieldStand(length);

function fieldStand(length) {
    switch (length) {
        case 9:
            FIELD.className = 'field field3';
            break;
        case 16:
            FIELD.className = 'field field4';
            break;
        case 25:
            FIELD.className = 'field field5';
            break;
        case 36:
            FIELD.className = 'field field6';
            break;
        case 49:
            FIELD.className = 'field field7';
            break;
        case 64:
            FIELD.className = 'field field8';
            break;
    }
}

//создание массива

function mixed(length) {
    let array = [];
    let x = 0;
    let y = false;

    while (array.length < length) {
        x = getRandomIntInclusive(0, length - 1);
        y = true;
        array.forEach(el => {
            if (el == x) {
                y = false;
            }
        })
        if (y == true) {
            array.push(x);
        }
    }
    return array;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

newField(array);

// заполнение поля

function newField(array) {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(el => el.remove());
    array.forEach(el => {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = el;
        FIELD.append(cell);
    })
}

//инвиз

hiddenStand();

function hiddenStand() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(el => {
        if (el.textContent == 0) {
            el.classList.add('hidden');
        }
    })
}


const SIZE = document.querySelectorAll(".size");

FOOTER.addEventListener('mousedown', function (event) {
    switch (event.target.id) {
        case 'eight':
            length = 64;
            array = mixed(length);
            fieldStand(length);
            newField(array);
            hiddenStand();
            DESCRIPTION.textContent = 'Размер поля 8х8';
            break;
        case 'seven':
            length = 49;
            array = mixed(length);
            fieldStand(length);
            newField(array);
            hiddenStand();
            DESCRIPTION.textContent = 'Размер поля 7х7';
            break;
        case 'six':
            length = 36;
            array = mixed(length);
            fieldStand(length);
            newField(array);
            hiddenStand();
            DESCRIPTION.textContent = 'Размер поля 6х6';
            break;
        case 'five':
            length = 25;
            array = mixed(length);
            fieldStand(length);
            newField(array);
            hiddenStand();
            DESCRIPTION.textContent = 'Размер поля 5х5';
            break;
        case 'four':
            length = 16;
            array = mixed(length);
            fieldStand(length);
            newField(array);
            hiddenStand();
            DESCRIPTION.textContent = 'Размер поля 4х4';
            break;
        case 'tree':
            length = 9;
            array = mixed(length);
            fieldStand(length);
            newField(array);
            hiddenStand();
            DESCRIPTION.textContent = 'Размер поля 3х3';
            break;
    }
})

BATTONS.addEventListener('mousedown', function (event) {
    if(event.target.id == 'mixEndStart') {
            array = mixed(length);
            newField(array);
            hiddenStand();
    }
    if (event.target.id == 'stop') {

    }
    if (event.target.id == 'save') {

    }
    if (event.target.id == 'result') {

    }
})











