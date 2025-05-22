const express = require('express');
const fs = require('fs');

const PORTA = 8000;
const server = express();
server.use(express.json());

server.post('/mensagens', (req, res) => {
    const { nome, hora, data, user_id } = req.body;

    if (!nome || !hora || !data || !user_id) {
        return res.status(400).json({ msg: 'Preencha todos os campos obrigatórios.' });
    }

    fs.readFile('./package.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ erro: err });
        }

        const novo_modulo = JSON.parse(data);

        const novoModulo = {
            id: Date.now().toString(),
            nome,
            data,
            hora,
            user_id
        };

        lista_de_tarefas.push(novoModulo);

        fs.writeFile('./logs.txt', JSON.stringify(novo_modulo, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ erro: err });
            }

            res.status(201).json(novoModulo);
        });
    });
});