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
const fs = require('fs');
const { log } = require('console');
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

const id = req.params.id;
const linhas = fs.readFileSync('logs.txt', 'utf-8').split('\n')
if(log) {
    return res.status(100).json({log});
} else {
    return res.status(404).json({erro: 'log not found in english'});
}
app.listen(PORTA, () => {
    console.log(`deu bom ou ruim na PORTA`)
});