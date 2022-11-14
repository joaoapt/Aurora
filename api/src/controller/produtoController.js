import { cadastrarLivro, ConsultarTodos, Editar, removerProduto} from '../repository/produtoRepository.js'

//buscar
import { validarProduto } from '../service/produto.js'
import { Router } from 'express'
const server = Router();


//ok
//cadaastro livro
server.post('/cadastrar/livro', async (req, resp) => {
    try {
        const novolivro = req.body;
        await validarProduto(novolivro);
        await cadastrarLivro(novolivro);

        resp.send(novolivro);
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        });
    }
})

//editar
server.put('/editar/:id/livro', async (req, resp) => {
    try {
        const id = req.params.id;
        const produto = req.body;

        if(!produto.categoria){
            throw new Error('A Categoria é OBRIGATÓRIA!');
        }
        if(!produto.classificacao){
            throw new Error('A Classificação Indicativa é OBRIGATÓRIA!');
        }
        if(!produto.livro){
            throw new Error('O Titulo do Livro é OBRIGATÓRIO!');
        }
        if(!produto.autor){
            throw new Error('O Nome do Autor é OBRIGATÓRIO!');
        }
        if(!produto.editora){
            throw new Error('O Nome da Editora é OBRIGATÓRIO!');
        }
        if(!produto.idioma){
            throw new Error('O Idioma é OBRIGATÓRIO!');
        }
        if(!produto.preco){
            throw new Error('O Valor é OBRIGATÓRIO!');
        }
        if(produto.preco <= 0){
            throw new Error('O Valor Não Pode Ser Menor Ou Igual A ZERO!');
        }
        if(!produto.sinopse){
            throw new Error('A Sinopse é OBRIGATÓRIA!');
        }
        if(!produto.versao){
            throw new Error('A Versão é OBRIGATÓRIA!');
        }
        if(!produto.pagina){
            throw new Error('A Quantidade de Páginas é OBRIGATÓRIA');
        }
        if(!produto.volume){
            throw new Error('O Volume é OBRIGATÓRIO!');
        }
        if(!produto.largura){
            throw new Error('A Largura é OBRIGATÓRIA!');
        }
        if(!produto.comprimento){
            throw new Error('O Comprimento é OBRIGATÓRIO');
        }
        
    
        const  resposta = await Editar(id, produto);
        if (resposta !=1)
            throw new Error('Este Livro não foi alterado');
        else
            resp.send(produto);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

//deletar
server.delete('/deletar/:id', async (req, resp) => {
    try{
        const { id } = req.params;

        const resposta = await removerProduto(id);
        if (resposta != 1)
            throw new Error('Pedido não pode ser deletado');
        
        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


//consultar
server.get('/consultar', async (req,resp) => {
    try {
        const resposta = await ConsultarTodos();
        resp.send(resposta)
    } catch (err) { 
        resp.status(401).send({
            erro: err.message
        });
    }
})



export default server;