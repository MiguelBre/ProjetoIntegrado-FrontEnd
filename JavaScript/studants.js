'use strict'

import { alunosAPI, cursosAPI } from "./API.js"

const cardCreator = (item) => {
    const card = document.createElement('a')
    card.classList.add('card-aluno')
    card.href = '../pages/studantinfo.html'
    card.setAttribute('id', item.matricula)
    let cor = ''
    card.innerHTML = `
        <img class="student-icon" src="${item.foto}">
        <p>${item.nome}</p>
    `
    card.onclick = record
    if (item.status == 'Finalizado') {
        card.classList.add('concluido')
    }
    return card
}

const showAlunos = async () => {
    const sigla = localStorage.getItem('course')
    const alunos = await alunosAPI(sigla)
    const container = document.getElementById('cards-container')
    
    const filterStatus = document.getElementById('select-status').value
    
    const criarCard = alunos.map(cardCreator)
    container.replaceChildren(...criarCard)
}
showAlunos()

const nomeCurso = async () => {
    const div = document.getElementById('nome-container')
    const nome = localStorage.getItem('course')
    div.innerHTML = `
        <h2>${nome.toUpperCase()}</h2>
    `
}
nomeCurso()

const record = (e) => {
    const nMatricula = e.currentTarget.id
    localStorage.setItem('matricula', nMatricula)
}