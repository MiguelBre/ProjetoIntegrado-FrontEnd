'use strict'

import { alunosAPI } from "./API.js"

const filterStatus = document.querySelector('#select-status')
const buttonSearch = document.querySelector('.search-button')

const cardCreator = (item) => {
    const card = document.createElement('a')
    card.classList.add('card-aluno')
    card.href = '../pages/studantinfo.html'
    card.setAttribute('id', item.matricula)
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
    const status = searchFunction()
    const alunos = await alunosAPI(sigla, status)
    const container = document.getElementById('cards-container')
    
    const criarCard = alunos.map(cardCreator)
    container.replaceChildren(...criarCard)
}

const searchFunction = () => {
    const filter = filterStatus.value
    if (filter == 'Finalizado') {
        showAlunos('Finalizado')
    } else if(filter == 'Cursando'){
        showAlunos('Cursando')
    } else {
        showAlunos('Todos')
    }
    return filter
}
buttonSearch.addEventListener('click', searchFunction)


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
searchFunction()