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


//img
// server.put('/admin/produto/:id/imagem', upload.array('imagens'), async (req, resp) => {
//     try {
//         const id = req.params.id;
//         const imagens = req.files;
//         const img = req.body.imagens.filter(item => item != 'undefined');


//         if (img.length > 0)
//             await removerProdutoImagensDiferentesDe(img);
//         else
//             await removerProdutoImagens(id);

        
//         for (const imagem of imagens) {
//             await salvarProdutoImagem(id, imagem.path);
//         }

//         resp.status(204).send();
//     }
//     catch (err) {
//         resp.status(400).send({
//             erro: err.message
//         })
//     }
// })



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

server.get('/classificacao', async (req, resp) => {
    try {
        const linhas = await listarClassificacoes();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/categoria/:id', async (req, resp) => {
    try {
        const id = req.params.id; 
        const linhas = await buscarCategoriaPorId(id);
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/classificacao/:id', async (req, resp) => {
    try {
        const id = req.params.id; 
        const linhas = await buscarProdutoClassificacao(id);
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;