const fs = require('fs')
const { uuid } = require('uuid')

function registrarLog(nomeAluno){
    const id = uuid();
    const dataHora = new Date().toISOString().replace
    const mensagem = `${id} - ${dataHora} - ${nomeAluno}\n`
    
    fs.appendFile('logs.txt', mensagem);
}

module.exports = {registrarLog};

const express = require('express');
const fs = require('fs')
const {registrarLog} = require
const PORTA = 4000;