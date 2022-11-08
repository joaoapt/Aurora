import { buscarProdutoPorId, cadastrarLivro, ConsultarTodos, Editar, removerProduto} from '../repository/produtoRepository.js'
import { validarProduto } from '../service/produto.js'
import { Router } from 'express'
import multer from 'multer'
const server = Router();
const upload = multer({ dest: 'storage/produto' });

//ok
//cadaastro livro
server.post('/cadastrar/livro', async (req, resp) => {
    try {
        const novolivro = req.body;
        await validarProduto(novolivro);
        await cadastrarLivro(novolivro);

        resp.send({
            id: buscarProdutoPorId
        });
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        });
    }
})

//editar
server.put('/editar/livro/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const produto = req.body;
        await Editar(id, produto);
        
        resp.status(204).send();

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