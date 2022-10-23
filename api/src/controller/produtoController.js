import { cadastrarLivro, ConsultarTodos, listarCategorias,buscarCategoriaPorId,salvarProdutoCategoria,listarClassificacoes, salvarProdutoClassificacao, buscarProdutoClassificacao, } from '../repository/produtoRepository.js'
import { validarProduto } from '../service/produto.js'
import { Router } from 'express'
//import multer from 'multer'

const server = Router();
//const upload = multer({ dest: 'storage/produto' });

//cadaastro livro
server.post('/admin/cadastrar/livro', async (req, resp) => {
    try {
        const novolivro = req.body;
        await validarProduto(novolivro);
        const local = await cadastrarLivro(novolivro);
        
        for (const idCat of novolivro.categoria) {
            const cat = await buscarCategoriaPorId(idCat);
            
            if (cat != undefined)
                await salvarProdutoCategoria(local, novolivro.categoria);
        }

        // for (const idCat of novolivro.categoria) {
        //     const cat = await buscarCategoriaPorId(idCat);
            
        //     if (cat != undefined)
        //         await salvarProdutoCategoria(idnovo, idCat);
        // }

        for (const idCla of novolivro.classificacao) {
            const cla = await buscarProdutoClassificacao(idCla);
            
            if (cla != undefined)
                await salvarProdutoClassificacao(local, novolivro.classificacao);
        }

        resp.send({
            id: idcla,
            id: idCat
        });
        
    }
    catch (err) {
        return resp.status(400).send({
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


export default server;