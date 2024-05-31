//Principio da inversão de dependencia
//Abstração
class Objeto{
    constructor(id, descricao){
        this.id = id;
        this.descricao = descricao;
    }
}

//cria a classe Livro
//esta classe tem o principio da responsabilidade unica pois ela serve só para criar o objeto Livro
class Livro extends Objeto{
    constructor(id, title, autor, descricao, alugado) {
        super(id, descricao);
        this.title = title;
        this.autor = autor;
        this.alugado = alugado;
    }
}

//exporta a classe Livro
//outros módulos ou classes podem usar esse classe principio do Open-close
module.exports = Livro;