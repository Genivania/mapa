'use strict'

import {pesquisarSigla} from './estado.js'


//console.log(await pesquisarSigla("SP"))
const mapa = document.querySelector('#map')

const sigla = document.getElementById('logo_estado')
const getEstado = ({target})=>{

    const estado = target.id.replace('BR-','')
    //const nomeEstado = target.getAttribute('title')
    console.log(estado)

    sigla.innerHTML = estado;

}

mapa.addEventListener('click', getEstado )