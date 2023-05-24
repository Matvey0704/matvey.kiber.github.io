function hello() {
    document.getElementById('1').innerHTML = 'hello' ;
}


function set_text(id, text) {
    document.getElementById(id).innerHTML = text;
}

function submit() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var status = document.getElementById('status').value;

    if (name == '') {
        document.getElementById('status').innerHTML = 'заполните поле ФИО'
    }

    else if (email == '') {
        document.getElementById('status').innerHTML = 'заполните поле e-mail'
    }

    else if (phone == '') {
        document.getElementById('status').innerHTML = 'заполните поле телефон'
    }

    else {
    document.getElementById('status').innerHTML = `Регистрация прошла успешно. Ваши данные на сайте: ФИО - ${name} + e-mail:  ${email} + телефон:  ${phone}`;
}
}


function set_body_color_red() {
    document.body.style.backgroundColor = 'red';
}

function set_body_color(color) {
    document.body.style.backgroundColor = color;
}

function set_body_color_blue() {
    document.body.style.backgroundColor = 'blue';
}

function set_body_color_yellow() {
    document.body.style.backgroundColor = 'yellow';
}

function set_body_color_green() {
    document.body.style.backgroundColor = 'green';
}

function set_body_color_black() {
    document.body.style.backgroundColor = 'black';
}

function set_body_color_grey() {
    document.body.style.backgroundColor = 'grey';
}

function input_color() {
    document.getElementById('color').value

    set_body_color(input_color)
}

function set_font_size(id, size) {
    document.getElementById(id).style.fontSize = size;
}

function custom_text(id, size) {
    document.getElementById('custom_text').style.fontSize = size;
    document.style.color = 'blue';
}

function lampOn() {
    document.getElementById('lamp').src = 'images/pic_bulbon.gif'

    document.getElementById('main').style.backgroundColor = 'white'
    document.getElementById('main').style.color = 'black';
}

function lampOff() {
    document.getElementById('lamp').src = 'images/pic_bulboff.gif'

    document.getElementById('main').style.backgroundColor = 'black'
    document.getElementById('main').style.color = 'white';
}

function deleteTitle() {
    document.getElementById('title').style.display = 'none'
}
function createButton() {
    var btn = document.createElement('BUTTON')
    btn.innerHTML = 'Новая кнопка';
    document.getElementById('buttonList').appendChild(btn);
}

function createP() {
    var btn = document.createElement('P')
    btn.innerHTML = 'Новый абзац';
    document.getElementById('gg_i_livau').appendChild(btn);
}

//.создание объекта
var person = new Object();

//добавление мвойств на значениями
person.name = 'Вася'
person.surname = 'Пупкин'
person.age = '88'
person.weight = '50'
person.fullName = function() {
    return this.name + ' ' + this.surname
}

function showPerson() {
document.getElementById('person').innerHTML = person.fullName() +''+ person.age;
}

function ShowAvto() {
document
.getElementById('avto').innerHTML = 
'Бренд: ' + this.brand + '<br>' +
'Модель: ' + this.model + '<br>' +
'Год: ' + avto.year + '<br>' +
'Цвет: ' + avto.color + '<br>' 
}

avto = new Object();

//brand - Audi
avto.brand = 'Audi'
//model- Аб
avto.model = 'Аб'
//year - 2020
avto.year = '2020'
//color - чёрный
avto.color = 'black'

let cat = {
    poroda: 'Sphinx',
    color: 'black',
    age: '3 y.o.'
}

cat.eyes = 'green'
cat.showInfo = function() {
    document.getElementById('cat').innerHTML = 
    `Порода: ${cat.poroda} <br> 
    цвет: ${cat.color} <br>
    Возраст: ${cat.age} <br>
    Глаза: ${cat.eyes} <br>`
}

const questions = [
    {
        question: 'Вопрос 1',
        answers: {
            1:'no',
            2:'no',
            3:'yes',
            4:'no'
        },
        rightAnswer: '1'
    },
    {
        question: 'Вопрос 2',
        answers: {
            1:'no',
            2:'no',
            3:'yes',
            4:'no'
        },
        rightAnswer: '1'
    },
    {
        question: 'Вопрос 3',
        answers: {
            1:'no',
            2:'no',
            3:'yes',
            4:'no'
        },
        rightAnswer: '1'
    },
]



let testContainer = document.getElementById('test');
let resultButton = document.getElementById('resultButton');
let resultContainer = document.getElementById('result');

function generateTest(question, testContainer, resultContainer,
    resultButton) {
    let out = [];
    let answers;
    for(let i=0; i<questions.lenght; i++) {
        answers = [];
        for(let ans_text in questions[i].answers) {
            answers.push(
                `<label><br><input type="radio" name=questions${i}" value="${and_text}"> ${and_text}) ${questiond[i].answers[and_text]} </label>`
            )
        }
        out.push(
            `<div class="questions"> ${questions[i].question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    }
}

generateTest(questions, testContainer, resultContainer) {
    let answerContainer = testContainer.querySelectorAll('.answers');

    let userAnswer = '';
    let rightAnswerNum = 0;

    for(let i=0; i<questions.lenght; i++)
}