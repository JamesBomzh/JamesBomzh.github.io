const questions = [
    {
        id: 1,
        text: 'Как подключить стандартную библиотеку iostream?',
        answers: [
            {
                id: 1,
                text: '#include <iostream.h>',
                isCorrect: false,
            },
            {
                id: 2,
                text: '#include “iostream.h”',
                isCorrect: false,
            },
            {
                id: 3,
                text: '#include <iostream>',
                isCorrect: true,
            },
            {
                id: 4,
                text: "#include 'iostream.h'",
                isCorrect: false,
            },
            {
                id: 5,
                text: '#include iostream',
                isCorrect: false,
            },
        ]
    },
    {
        id: 2,
        text: 'Как указать комментарий?',
        answers: [
            {
                id: 1,
                text: '/* здесь комментарий /*',
                isCorrect: false,
            },
            {
                id: 2,
                text: '// здесь комментарий',
                isCorrect: true,
            },
            {
                id: 3,
                text: '/ здесь комментарий',
                isCorrect: false,
            },
            {
                id: 4,
                text: "/* здесь комментарий",
                isCorrect: false,
            },
            {
                id: 5,
                text: '# здесь комментарий',
                isCorrect: false,
            },
        ]
    },
    {
        id: 3,
        text: 'Сколько аргументов можно передать в функцию?',
        answers: [
            {
                id: 1,
                text: 'До 10',
                isCorrect: false,
            },
            {
                id: 2,
                text: 'Не более 50',
                isCorrect: false,
            },
            {
                id: 3,
                text: 'Неограниченное количество',
                isCorrect: true,
            },
            {
                id: 4,
                text: "До 30",
                isCorrect: false,
            },
            {
                id: 5,
                text: 'До 5',
                isCorrect: false,
            },
        ]
    },
    {
        id: 3,
        text: 'Сколько аргументов можно передать в функцию?',
        answers: [
            {
                id: 1,
                text: 'До 10',
                isCorrect: false,
            },
            {
                id: 2,
                text: 'Не более 50',
                isCorrect: false,
            },
            {
                id: 3,
                text: 'Неограниченное количество',
                isCorrect: true,
            },
            {
                id: 4,
                text: "До 30",
                isCorrect: false,
            },
            {
                id: 5,
                text: 'До 5',
                isCorrect: false,
            },
        ]
    },
    {
        id: 4,
        text: 'Что покажет код ниже?\n int const a = 5;\na++; \ncout << a;',
        answers: [
            {
                id: 1,
                text: 'Ошибку',
                isCorrect: true,
            },
            {
                id: 2,
                text: '5',
                isCorrect: false,
            },
            {
                id: 3,
                text: '6',
                isCorrect: false,
            },
            {
                id: 4,
                text: "0",
                isCorrect: false,
            },
        ]
    },
    {
        id: 5,
        text: 'Где правильно указана переменная?',
        answers: [
            {
                id: 1,
                text: "char sym = 'a';",
                isCorrect: true,
            },
            {
                id: 2,
                text: 'float x = 32,14;',
                isCorrect: false,
            },
            {
                id: 3,
                text: 'int num = "1";',
                isCorrect: false,
            },
            {
                id: 4,
                text: "done = true;",
                isCorrect: false,
            },
            {
                id: 5,
                text: 'var str = "Hi";',
                isCorrect: false,
            },
        ]
    },
    {
        id: 6,
        text: 'Чему равны переменные а и х после выполнения следующего кода?\nint a = 5;\nlong x = 3;\na+=x;\nx=--x;',
        answers: [
            {
                id: 1,
                text: "8 и 7",
                isCorrect: false,
            },
            {
                id: 2,
                text: '8 и 2',
                isCorrect: true,
            },
            {
                id: 3,
                text: '6 и 2',
                isCorrect: false,
            },
        ]
    },
    {
        id: 7,
        text: 'При выполнении следующего отрывка программы пользователь ввел: "10 234.5 8822". Что отобразится на экране?\nint a,b,c;\ncin >> a >> b >> c;\n// 10 234.5 8822\ncout << a << b << c;',
        answers: [
            {
                id: 1,
                text: "10 234.5 8822",
                isCorrect: false,
            },
            {
                id: 2,
                text: '10234.58822',
                isCorrect: false,
            },
            {
                id: 3,
                text: '102340',
                isCorrect: true,
            },
        ]
    },
    {
        id: 8,
        text: 'Что такое конструктор класса?',
        answers: [
            {
                id: 1,
                text: "Метод инициализации экземпляра, который проверяет возможность создания экземпляра и реализует его",
                isCorrect: false,
            },
            {
                id: 2,
                text: 'Способ создания класса',
                isCorrect: false,
            },
            {
                id: 3,
                text: 'Специальный метод класса, который предназначен для инициализации элементов класса некоторыми начальными значениями',
                isCorrect: true,
            },
        ]
    },
    {
        id: 9,
        text: 'Как правильно объявить переменную?',
        answers: [
            {
                id: 1,
                text: 'string text="text";',
                isCorrect: false,
            },
            {
                id: 2,
                text: "char text[]='text';",
                isCorrect: false,
            },
            {
                id: 3,
                text: 'char text[]="text";',
                isCorrect: true,
            },
        ]
    },
    {
        id: 10,
        text: 'Где процессор будет искать файл #include ?',
        answers: [
            {
                id: 1,
                text: 'Во всех папках включения файлов',
                isCorrect: false,
            },
            {
                id: 2,
                text: "В локальных по отношению к проекту папках включения файлов",
                isCorrect: false,
            },
            {
                id: 3,
                text: 'В глобальных по отношению к проекту папках включения файлов',
                isCorrect: true,
            },
        ]
    },
    {
        id: 11,
        text: 'Чему будет равна переменная х?\ndouble x = 400;\nint a = 2;\nx%=3*a;',
        answers: [
            {
                id: 1,
                text: 'Остаток от деления 400 на 3, который умножается на 2',
                isCorrect: false,
            },
            {
                id: 2,
                text: "Остаток от деления 400 на 6",
                isCorrect: true,
            },
            {
                id: 3,
                text: 'Количество процентов, которое 6 составляет от 400',
                isCorrect: false,
            },
        ]
    },
    {
        id: 12,
        text: 'Что такое директивы препроцессора?',
        answers: [
            {
                id: 1,
                text: 'Дерево папок и файлов программы',
                isCorrect: false,
            },
            {
                id: 2,
                text: "Способ добавления библиотеки в программу",
                isCorrect: false,
            },
            {
                id: 3,
                text: 'Указание компилятору выполнить то или иное действие в момент компиляции программы',
                isCorrect: true,
            },
        ]
    },
    {
        id: 13,
        text: 'Какое утверждение верно?',
        answers: [
            {
                id: 1,
                text: 'Размер переменной типа bool меньше, чем типа char',
                isCorrect: false,
            },
            {
                id: 2,
                text: "Переменная типа float занимает столько же места, как и double",
                isCorrect: false,
            },
            {
                id: 3,
                text: 'Размер переменной типа char равен единице',
                isCorrect: true,
            },
        ]
    },
];

// const paper = document.getElementById('page_style');
const paper = document.querySelector('.page_style');
let page = 0;
let countRightAnswers = 0;
const max = questions.length;

const handleButtonClick = () => {
    page++;
    getQuestionBlock(page);
};

const handleInputChange = (event) => {
    const target = event.target;
    const questionList = document.querySelector('.questions__list');
    const button = document.getElementById('questions__button');
    const children = questionList.children;
    const answers = questions[page].answers;
    let isCorrect = false;
    for (i = 0; i < children.length; i++) {
        const text = children[i];
        const input = children[i].firstChild;
        if (input.checked && answers[i].isCorrect) {
            countRightAnswers++;
            text.classList.add('questions__question_success');
        }
        else if (input.checked && !answers[i].isCorrect) {
            text.classList.add('questions__question_error');
        }
        else if (!input.checked && answers[i].isCorrect) {
            text.classList.add('questions__question_success');
        }
        input.disabled = true;
    }
    button.disabled = false;
}

const getQuestionsHTML = (question) => {
    const answers = question.answers;
    const answersHTML = answers.map((item, index) => (`
        <p><input id="${item.id}" name="question" type="radio" value="${item.id}" class="questions__question" onchange="handleInputChange(event)">
            ${item.text}
        </input></p>
    `));
    let list = '';
    answersHTML.forEach(item => list += item);
    return (`
        <div class="questions">
            <h3 class="questions__title">${question.text}</h3>
            <div class="questions__list">
                ${list}
            </div>
            <div>
                Вопрос ${page + 1}/${max}
            </div>
            <button onclick="handleButtonClick()" disabled id="questions__button">Следующий вопрос</button>
        </div>
    `)
}
const getQuestionBlock = (page) => {
    if (page < max) {
        const html = getQuestionsHTML(questions[page]);
        paper.innerHTML = html;
    }
    else {
        paper.innerHTML = `
            <div>
                Количество правильных ответов: ${countRightAnswers}
            </div>
        `
    }
}

paper.innerHTML = getQuestionsHTML(questions[0]);