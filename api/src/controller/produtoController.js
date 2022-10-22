import { cadastrarLivro, ConsultarTodos, listarCategorias } from '../repository/produtoRepository.js'

import { Router } from 'express'

const server = Router();

//cadaastro livro
server.post('/admin/cadastrar/livro', async (req, resp) => {
    try {
        const novolivro = req.body;
        if(!novolivro.categoria){
            throw new Error('A Categoria é OBRIGATÓRIA!');
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
        const local = await cadastrarLivro (novolivro)
        resp.send(local)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        });
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


server.get('/categoria', async (req, resp) => {
    try {
        const linhas = await listarCategorias();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



export async function buscarCategoriaPorId(id) {
    const comando = `
        select id_categoria         as id,
               nm_categoria         as categoria
          from tb_categoria
         where id_categoria = ?
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export default server;