import { con } from './connection.js'

//ok
export async function cadastrarLivro (cadastro) {
    const comando = `
    INSERT INTO tb_produto ( nm_livro, ds_categoria, ds_classificacao, nm_autor, nm_editora, nm_idioma, nr_isbn13, nr_isbn10, vl_preco, nm_original, ds_sinopse, ds_versao, nr_pagina, nr_volume, nr_largura, nr_comprimento)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`		


//16
    const [resposta] = await con.query(comando, [cadastro.livro, cadastro.categoria, cadastro.classificacao, cadastro.autor, cadastro.editora, cadastro.idioma, cadastro.isbn13, cadastro.isbn10, cadastro.preco, cadastro.original, cadastro.sinopse, cadastro.versao, cadastro.pagina, cadastro.volume, cadastro.largura, cadastro.comprimento]);
    cadastro.id = resposta.insertId;
    return cadastro;
}


export async function ConsultarTodos() {
    const comando = `
    select 	id_produto                      as id,
            nm_livro                      	as livro,
            vl_preco                        as preco,
            ds_classificacao                as classificacao,
            nr_volume						as volume
    from tb_produto;`

    const [linhas] = await con.query(comando)
    return linhas;
}


export async function Editar(id, produto) {
    const comando = `
    update tb_produto set
    nm_livro	        =?,
    ds_categoria        =?,
    ds_classificacao    =?,
    nm_autor	        =?,
    nm_editora	        =?,
    nm_idioma	        =?,
    nr_isbn13	        =?,
    nr_isbn10	        =?,
    vl_preco	        =?,
    nm_original	        =?,
    ds_sinopse	        =?,
    ds_versao	        =?,
    nr_pagina	        =?,
    nr_volume		    =?,
    nr_largura	        =?,
    nr_comprimento      =?	
    where id_produto    =?;
    `

    const [resposta] = await con.query(comando, [
        produto.livro, 
        produto.categoria, 
        produto.classificacao, 
        produto.autor, 
        produto.editora, 
        produto.idioma, 
        produto.isbn13, 
        produto.isbn10, 
        produto.preco, 
        produto.original, 
        produto.sinopse,
        produto.versao, 
        produto.pagina, 
        produto.volume, 
        produto.largura, 
        produto.comprimento, 
        id]);

    return resposta.affectedRows;
}

export async function buscarProdutos(nome) {
    const comando = `
        select id_produto                   as id,
            nm_livro                        as livro,
            vl_preco                        as preco,
            ds_categoria                    as categoria,
            ds_classificacao                as classificação,
            ds_img                          as imagem
            from tb_produto
         where nm_livro like ?;
        `

    const [registros] = await con.query(comando, [ `%${nome}%` ]);
    return registros;
}

export async function buscarProdutosClassificacao(nome) {
    const comando = `
        select id_produto                   as id,
            nm_livro                        as livro,
            vl_preco                        as preco,
            ds_categoria                    as categoria,
            ds_classificacao                as classificação,
            ds_img                          as imagem
        from tb_produto
         where ds_classificacao like ?;
        `

        const [registros] = await con.query(comando, [ `%${nome}%` ]);
    return registros;
}

export async function buscarProdutoCategorias(nome) {
    const comando = `
        select id_produto                   as id,
            nm_livro                        as livro,
            vl_preco                        as preco,
            ds_categoria                    as categoria,
            ds_classificacao                as classificacao,
            ds_img                          as imagem
        from tb_produto
         where ds_categoria like ?;
        `

    const [registros] = await con.query(comando, [ `%${nome}%` ]);
    return registros;
}


export async function buscarProdutoPorId(id) {
    const comando = `
         select id_produto                      as id,
                nm_livro                        as produto,
                vl_preco                        as preco,
                ds_categoria                    as categoria
                from tb_produto 
       where id_produto = ?;
        `

    const [registros] = await con.query(comando, [id]);
    return registros[0];
}

export async function buscarProdutovil(id) {
    const comando = `
            select tb_produto.id_produto    id,
                nm_livro					    livro,
                vl_preco						preco,
                ds_classificacao				classificacao,
                ds_categoria
                ds_img    				        imagem,
                nm_autor						autor,
                nm_editora						editora,
                nm_idioma						idioma,
                nr_isbn13						isbn13,
                nr_isbn10						isbn10,
                vl_preco						preco,
                ds_sinopse						sinopse,
                ds_versao						versao,
                nr_pagina						paginas,
                nr_largura						largura,
                nr_comprimento					comprimento
                from tb_produto
            where id_produto = 6;
        `

    const [registros] = await con.query(comando, [id]);
    return registros[0];
}

export async function listarProdutosInicio() {
    const comando = `
                select tb_produto.id_produto    id,
                nm_livro					    livro,
                vl_preco						preco,
                ds_categoria				    categoria,
                ds_img    				        imagem
                from tb_produto
                group 
                by tb_produto.id_produto,
                nm_livro,
                ds_categoria;
    `

    const [registros] = await con.query(comando);
    return registros;
}


export async function removerProduto(idProduto) {
    const comando = `
        delete from tb_produto 
              where id_produto = ?;
    `

    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows;
}

//img
export async function AlterarImg(img, id){
    const comando =
        `UPDATE tb_produto
            SET ds_img          = ?
          WHERE id_produto      = ? `;

    const [resposta] = await con.query(comando, [img, id]);
    return resposta.affectedRows;
}