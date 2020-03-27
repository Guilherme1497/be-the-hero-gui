const express = require('express'); //nao usa o ./ pois é um pacote
const cors = require('cors');
const routes = require('./routes'); //usa o ./ pois é um arquivo

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

 app.listen(3333);

 //module.exports = routes; //exportando uma variavel de dentro desse arquivo