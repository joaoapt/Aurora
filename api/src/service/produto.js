export async function validarProduto(novolivro) {
        if(!novolivro.categoria){
            throw new Error('A Categoria é OBRIGATÓRIA!');
        }
        if(!novolivro.classificacao){
            throw new Error('A Classificação Indicativa é OBRIGATÓRIA!');
        }
        if(!novolivro.livro){
            throw new Error('O Titulo do Livro é OBRIGATÓRIO!');
        }
        if(!novolivro.autor){
            throw new Error('O Nome do Autor é OBRIGATÓRIO!');
        }
        if(!novolivro.editora){
            throw new Error('O Nome da Editora é OBRIGATÓRIO!');
        }
        if(!novolivro.idioma){
            throw new Error('O Idioma é OBRIGATÓRIO!');
        }
        if(!novolivro.preco){
            throw new Error('O Valor é OBRIGATÓRIO!');
        }
        if(novolivro.preco <= 0){
            throw new Error('O Valor Não Pode Ser Menor Ou Igual A ZERO!');
        }
        if(!novolivro.sinopse){
            throw new Error('A Sinopse é OBRIGATÓRIA!');
        }
        if(!novolivro.versao){
            throw new Error('A Versão é OBRIGATÓRIA!');
        }
        if(!novolivro.pagina){
            throw new Error('A Quantidade de Páginas é OBRIGATÓRIA');
        }
        if(!novolivro.volume){
            throw new Error('O Volume é OBRIGATÓRIO!');
        }
        if(!novolivro.largura){
            throw new Error('A Largura é OBRIGATÓRIA!');
        }
        if(!novolivro.comprimento){
            throw new Error('O Comprimento é OBRIGATÓRIO');
        }
}