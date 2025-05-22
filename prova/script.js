const fs = require('fs')
const { uuid } = require('uuid')
const PORTA = 4000;

function registrarLog(nomeAluno) {
    const id = uuid();
    const dataHora = new Date().toISOString().replace
    const mensagem = `${id} - ${dataHora} - ${nomeAluno}\n`

    fs.appendFile('logs.txt', mensagem);
}

module.exports = { registrarLog };

const express = require('express');
const fs = require('fs')
const { registrarLog } = require
const server = express();
server.use(express.json());

fs.readFile('./logs', 'utf-8', id, datahora, mensagem => {
    if (id) {
        return res.status(500).json({ erro: id });
    }
    if (datahora) {
        return res.status(500).json({ erro: datahora });
    }
    if (mensagem) {
        return res.status(500).json({ erro: mensagem })
    }
});