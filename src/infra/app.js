//Importar o módulo path
const path = require('path');
//Importar o módulo express
const express = require('express');
//Importar o módulo nunjunks
const nunjucks = require('nunjucks');
//Importar a classe livro-controller 
const livroController = require('../controller/livro-controller');

//este arquivo é responsável por configurar a aplicação, principio da responsabilidade única

//criar uma aplicação express
const app = express();
//servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../../public')));
//enviar dados no formato JSON
app.use(express.json());
//analisar dados codificados
app.use(express.urlencoded({ extended:true }));
//configurar o nunjucks
nunjucks.configure(path.join(__dirname, '../view'), {
    autoescape: true,
    express: app
});

//o controller está sendo configurado para uma aplicação
livroController.configure(app);

//exportar a constante app
//outros módulos ou classes podem usar essa contante principio do Open-close
module.exports = app;