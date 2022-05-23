const express = require ('express');
const app = express();

const lembretes = {};
contador = 0;
app.use(express.json());

app.get('/lembretes', (req, res) =>{
    res.send(lembretes);
});

app.put ('/lembretes', (req, res) =>{
    contador++;
    const {texto} = req.body;

    lembretes[contador] = {
        contador, texto
    };
    res.status(201).send(lembretes[contador]);
});

app.listen (4000, ()=> {
    console.log ('Lembretes. Porta 4000');
});