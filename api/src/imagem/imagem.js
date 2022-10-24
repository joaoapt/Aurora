//img
server.put('/admin/produto/:id/imagem', upload.array('imagens'), async (req, resp) => {
    try {
        const id = req.params.id;
        const imagens = req.files;
        const img = req.body.imagens.filter(item => item != 'undefined');


        if (img.length > 0)
            await removerProdutoImagensDiferentesDe(img);
        else
            await removerProdutoImagens(id);

        
        for (const imagem of imagens) {
            await salvarProdutoImagem(id, imagem.path);
        }

        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/livro/:id/imagem', async (req,resp) => {
    try{

    }
    catch{
        resp.status(400).send({
            erro:err.message
        })
    }
})


//isso aqui você vai importar no repository depois vc vê lá video 10, minuto 2:45 e adicionei um negocinho no final do dml.sql
export async function AlterarImagem(imagem, id){
    const comando =
        `UPDATE tb_produto_img
            SET ds_img = ?
          WHERE id_img = ?`;

    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}


export default server;