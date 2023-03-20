'use strict'

export const pesquisarSigla = async (sigla) => {
    const url = `http://localhost:8080/v1/senai/cidades?uf=${sigla}`
    const response = await fetch(url) 
    const dadosEstado = await response.json()
    return dadosEstado  
}