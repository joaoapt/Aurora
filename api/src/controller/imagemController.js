import {salvarProdutoImagem} from '../repository/produtoRepository.js'
import { Router } from 'express'
import {AlterarImagem} from '../repository/produtoRepository.js'
// import {buscarimg} from '../repository/produtoRepository.js'
import multer from 'multer'
const server = Router();
const upload = multer({ dest: 'storage/produto' });

//img
server.put('/livro/:id/imagens', upload.array('imagens'), async (req, resp) => {
    try {
        const id = req.params.id;
        const imagens = req.files;

        console.log(id);
        console.log(imagens);

        // if (img.length > 0)
        //     await removerProdutoImagensDiferentesDe(img);
        // else
        //     await removerProdutoImagens(id);
        
        for (const img of imagens) {
            await salvarProdutoImagem(id, img.path);
        }

        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/editar/img/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const produto = req.body;
        await AlterarImagem(id, produto);
        
        resp.status(204).send();

    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

// //isso aqui você vai importar no repository depois vc vê lá video 10, minuto 2:45 e adicionei um negocinho no final do dml.sql
// export async function AlterarImagem(imagem, id){
//     const comando =
//         `UPDATE tb_produto_img
//             SET ds_img = ?
//           WHERE id_img = ?`;

//     const [resposta] = await con.query(comando, [imagem, id]);
//     return resposta.affectedRows;
// }


export default server;