const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

app.use(express.json());

const observacoesPorLembereteId = {};

app.put('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidv4();
    const { texto } = req.body;
    const observacoesDoLembrete = observacoesPorLembereteId[req.params.id] || [];

    observacoesDoLembrete.push({ id: idObs, texto });
    observacoesPorLembereteId[req.params.id] = observacoesDoLembrete;
    res.status(201).send(observacoesDoLembrete);
});

app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembereteId[req.params.id] || [] );
});

app.listen(5000, (() => {
    console.log('Lembretes. Porta 5000');
}));