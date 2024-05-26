//cria a classe Livro
//esta classe tem o principio da responsabilidade unica pois ela serve só para criar o objeto Livro
class Livro {
    constructor(id, title, autor, descricao, alugado) {
        this.id = id;
        this.title = title;
        this.autor = autor;
        this.descricao = descricao;
        this.alugado = alugado;
    }
}

//exporta a classe Livro
//outros módulos ou classes podem usar esse classe principio do Open-close
module.exports = Livro;