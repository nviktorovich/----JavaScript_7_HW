'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

const active = "active"
/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
let currentText = document.querySelector(".text")
let links = document.getElementsByClassName("nav-link")

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", clickHandler)
}

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
    changeActiveClass(event)
    changeText(event)
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    for (let i = 0; i < links.length; i++) {
        if (links[i].classList.contains(active) && event.target !== links[i]) {
            links[i].classList.remove(active)
        } else if (!links[i].classList.contains(active) && event.target === links[i]) {
            links[i].classList.add(active)
        }
    }
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    for (let i = 0; i <= links.length; i++) {
        if (links[i] === event.target) {
            currentText.textContent = texts[`text${i + 1}`]
        }
    }
}