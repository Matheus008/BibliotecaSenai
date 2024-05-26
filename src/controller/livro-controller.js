//importar a classe service-livro
const service = require('../domain/livro/service-livro');

//esta classe é responsável por pedir informação para o model e enviar a informação para a view em resumo essa classe é a ponte entre a view e o model ela é chamada de controller
//esta classe tem a responsabilidade de buscar as informações no model e enviar para a view , principio de responsabilidade única

//esta classe é responsável por chamar as funções da classe service-livro
class LivroController {
    //responsável por chamar a função remove do service-livro e retornar se foi removido ou não
    remove(request, response) {
        const {id} = request.params;
        const ok = service.remove(id);
        const message = ok ? 'Registro removido com sucesso' : 'Não foi possível remover o registro';
        const livros = service.findAll();
        const modelView = {
            message: message,
            livros
        }
        response.render('livro/listLivro.html', modelView);
    }

    //responsável por buscar e retornar todas as informações da tabela
    findAll(request, response) {
        const livros = service.findAll();
        const modelView = {
            livros
        }
        response.render('livro/listLivro.html', modelView);
    } 

    //responsável por buscar e retornar um ID específico 
    showForm(request, response) {
        const {id} = request.params;
        const livro = service.findById(id) || {id: "novo"};
        if(id && id.trim().length > 0) {
            const modelView = {
                livro
            }
            response.render('livro/formLivro.html', modelView);
        }
    }

    //responsável por salvar as informações seja para criar um novo objeto livro ou para alterar
    save(request, response) {
        const paramsId = request.params.id;
        const {id, title, autor, descricao, alugado} = request.body;
        let message = "";
        let livro = null;
        let confimaAlugado = false;
        if(alugado == "on") {
            confimaAlugado = true;
        }else {
            confimaAlugado = false;
        }

        if(id && id.trim() == paramsId.trim() && id != "novo") {
            livro = service.update(id,title,autor,descricao,confimaAlugado);
            message = "Atualizado com sucesso!!";
        }else {
            livro = service.insert(title,autor,descricao,confimaAlugado);
            message = "Registro criado com sucesso!!";
        }

        const modelView = {
            livro,
            message
        }
        response.render('livro/formLivro.html', modelView);
    }
}

//Exporta a classe LivroController
const controller = new LivroController();

//função de configuração para pegar informações ou para postar novas informações
//Indica a rota de cada função
function configure(app) {
    app.get('/livros', controller.findAll);
    app.get('/livros/:id', controller.showForm);
    app.get('/livros/:id/remove', controller.remove);
    app.post('/livros/:id', controller.save);
}

//Exporta a função configure
//outros módulos ou classes podem usar essa função principio do Open-close
module.exports = {
    configure
}