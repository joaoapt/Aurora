import { Router } from 'express'
import {AlterarImg} from '../repository/produtoRepository.js'
import multer from 'multer'
const server = Router();
const upload = multer({ dest: 'storage' });

server.put('/livro/:id/capa', upload.single('capa'), async (req, resp) => {
    try {
        const { id } = req.params;
        const img = req.file.path;

        const resposta = await AlterarImg(img, id);
        if (resposta !== 1)
            throw new Error("A imagem Não foi Fi");

        resp.status(204).send();
    } catch (err) {
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