const fs = require('fs')
const { uuidv4 } = require('uuid')

function registrarLog(nomeAluno){
    const id = uuidv4();
    const dataHora = new Date().toISOString().replace
    const mensagem = `${id} - ${dataHora} - ${nomeAluno}\n`
    
    fs.appendFile('logs.txt', mensagem);
}

module.exports = {registrarLog};