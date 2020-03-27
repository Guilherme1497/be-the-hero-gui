const express = require('express');

const OngControler = require('./controllers/OngController');
const IncidentControler = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionControler = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionControler.create);

routes.get('/ongs', OngControler.index); //geralmente se usa o nome index para o metodo que faz a listagem de todos os dados de uma tabela
routes.post('/ongs',OngControler.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentControler.index);
routes.post('/incidents', IncidentControler.create);
routes.delete('/incidents/:id', IncidentControler.delete);

module.exports = routes; // exportando as rotas daqui para serem acessadas no index.js
 