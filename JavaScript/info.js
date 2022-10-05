'use strict'

import { dadosAlunoAPI } from "./API.js"

const createGiantCard = async () => {
    const matricula = localStorage.getItem('matricula')
    const dadosAluno = await dadosAlunoAPI(matricula)
    const main = document.querySelector('main')
    const div = document.createElement('div')
    div.classList.add('student-container')
    div.innerHTML = `
        <img class="phone-image" src="${dadosAluno[0].icone}" alt="">
        <p class="name-student">${dadosAluno[0].nome}</p>
    `
    main.appendChild(div)
}
createGiantCard()