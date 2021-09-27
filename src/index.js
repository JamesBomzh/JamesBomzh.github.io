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
];

const paper = document.getElementById('page_style');
let page = 0;
let countRightAnswers = 0;
const max = questions.length;

const handleButtonClick = () => {
    page++;
    console.log(page);
    getQuestionBlock(page);
};

const handleInputChange = (event) => {
    const target = event.target;
    const questionList = document.querySelector('.questions__list');
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
}

const getQuestionsHTML = (question) => {
    const answers = question.answers;
    return (`
        <div class="questions">
            <h3 class="questions__title">${question.text}</h3>
            <div class="questions__list">
                <p><input id="${answers[0].id}" name="question" type="radio" value="${answers[0].id}" class="questions__question" onchange="handleInputChange(event)">
                    ${answers[0].text}
                </input></p>
                <p><input id="${answers[1].id}" name="question" type="radio" value="${answers[1].id}" class="questions__question" onchange="handleInputChange(event)">
                    ${answers[1].text}
                </input></p>
                <p><input id="${answers[2].id}" name="question" type="radio" value="${answers[2].id}" class="questions__question" onchange="handleInputChange(event)">
                    ${answers[2].text}
                </input></p>
                <p><input id="${answers[3].id}" name="question" type="radio" value="${answers[3].id}" class="questions__question" onchange="handleInputChange(event)">
                    ${answers[3].text}
                </input></p>
                <p><input id="${answers[4].id}" name="question" type="radio" value="${answers[4].id}" class="questions__question" onchange="handleInputChange(event)">
                    ${answers[4].text}
                </input></p>
            </div>
            <button onclick="handleButtonClick()">Следующий вопрос</button>
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
const test = document.querySelector('.questions__list')
console.log(test.children);
const t = document.createElement('input');