import { cadastrarLivro, ConsultarTodos, Editar} from '../repository/produtoRepository.js'
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
        await cadastrarLivro(novolivro);
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        });
    }
})

server.put('/admin/produto/:id', async (req, resp) => {
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




export default server;