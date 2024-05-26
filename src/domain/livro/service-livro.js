//importa a classe Livro
const Livro = require('./livro');
//para contar qual id está para não repetir
let Next_ID = 1;
//simula o banco de dados
let records = [{id:Next_ID++, title:"senhor dos Anéis", autor:"Padre Fabio de Melo", descricao:"Em busca dos Anéis perdidos", alugado:false} ];

//Esta parte está ligada ao model onde fica as regras de negócios, valida as informações e acessa o banco de dados (para afins de teste criamos um array com o objeto livro para 
//simular o banco dados)

//apenas esta classe vai buscar (seja todas as informações ou só pelo ID), inserir, alterar e deletar os dados principio de responsabilidade única
class LivroService {
    //busca todos os objetos de dentro do array
    findAll() {
        return records;
    }

    //busca o objeto com um id especificado
    findById(id) {
        return records.find((record) => record.id == id);
    }

    //insere um novo objeto dentro do array
    insert(title,autor,descricao,alugado) {
        const livro = new Livro(Next_ID++,title, autor, descricao, alugado);
        records.push(livro);
        return livro;
    }

    //altera as informações de dentro do array
    update(id,title,autor,descricao,alugado) {
        records = records.map((record) => {
            if(record.id == id) {
                record.title = title;
                record.autor = autor;
                record.descricao = descricao;
                record.alugado = alugado;
            }
            return record;
        });
        return new Livro(id,title,autor,descricao,alugado);
    }

    //remove um objeto com o id especificado
    remove(id) {
        const oldSize = records.length;
        records = records.filter((record) => record.id != id);
        return oldSize > records.length;
    }
}

//Exporta a classe LivroService
//outros módulos ou classes podem usar esse classe principio do Open-close
module.exports = new LivroService();