//importando a aplicação
const app = require('../infra/app');
//atribuindo o núpero da porta a ser utilizada
const PORT = process.env.PORT || 3000;

//este arquivo serve para iniciar o servidor

//serve para iniciar o servidor, mostrando a url
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));