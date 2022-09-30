'use strict'

const cursosAPI = async () => {
    const url = `http://localhost:8080/cursos`
    const response = await fetch(url)
    const listCursos = await response.json()
    return listCursos.cursos
}

const alunosAPI = async (sigla) => {
    const url = `http://localhost:8080/alunos/curso/${sigla}`
    const response = await fetch(url)
    const listAlunos = await response.json()
    return listAlunos
}

const dadosAlunoAPI = async (matricula) => {
    const url = `http://localhost:8080/aluno/${matricula}`
    const response = await fetch(url)
    const dadosAluno = await response.json()
    return dadosAluno
}

export{
    cursosAPI,
    alunosAPI,
    dadosAlunoAPI
}