'use strict'

import { cursosAPI } from "./API.js"

const loadButton = (item) => {
    const button = document.createElement('a')
    button.classList.add('button-courses')
    button.href = './FrontEnd/pages/studants.html'
    button.innerHTML = `
        <img src="${item.icone}" alt="">
        <p>${item.sigla}</p>
    `
    button.setAttribute('id', `${item.sigla.toLowerCase()}`)
    button.onclick = record
    return button
}

const cursos = async () => {
    const container = document.getElementById('button-container')
    const cursos = await cursosAPI()
    const criarBotao = cursos.map(loadButton)
    container.replaceChildren(...criarBotao)
}
cursos()

const record = (e) => {
    const sigla = e.currentTarget.id
    localStorage.setItem('course', sigla)
}