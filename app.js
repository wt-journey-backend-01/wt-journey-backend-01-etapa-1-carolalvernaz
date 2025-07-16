const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/enviar', (req, res) => {
  const { nome, email } = req.body;
  res.send(`Olá ${nome}, seu email (${email}) foi recebido com sucesso!`);
});

app.get('/api/dados', (req, res) => {
  res.json({ nome: "Carol", trilha: "Levty", etapa: 1 });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
 
