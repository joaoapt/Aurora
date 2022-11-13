import { con } from './connection.js'

//ok
export async function cadastrarLivro (cadastro) {
    const comando = `
    INSERT INTO tb_produto ( nm_livro, ds_categoria, ds_classificacao, nm_autor, nm_editora, nm_idioma, nr_isbn13, nr_isbn10, vl_preco, nm_original, ds_sinopse, ds_versao, nr_pagina, nr_volume, nr_largura, nr_comprimento)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`		


//16
    const resposta = await con.query(comando, [cadastro.livro, cadastro.categoria, cadastro.classificacao, cadastro.autor, cadastro.editora, cadastro.idioma, cadastro.isbn13, cadastro.isbn10, cadastro.preco, cadastro.original, cadastro.sinopse, cadastro.versao, cadastro.pagina, cadastro.volume, cadastro.largura, cadastro.comprimento]);
    return resposta.insertId;
}


export async function ConsultarTodos() {
    const comando = `
    select * from tb_produto`

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

    const resposta = await con.query(comando, [produto.livro, produto.categoria, produto.classificacao, produto.autor, produto.editora, produto.idioma, produto.isbn13, produto.isbn10, produto.preco, produto.original, produto.sinopse, produto.versao, produto.pagina, produto.volume, produto.largura, produto.comprimento, id]);
    return resposta.affectedRows;
}


export async function salvarProdutoImagem(idProduto, imagemPath) {
    const comando = `
        insert into tb_produto_img (id_produto, ds_img)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, imagemPath])
}


export async function buscarProdutos() {
    const comando = `
        select id_produto                   as id,
            nm_produto                      as produto,
            vl_preco                        as preco,
            ds_categoria                    as categoria
        from tb_produto
         where nm_produto = ?
        `

    const [registros] = await con.query(comando);
    return registros;
}


export async function buscarProdutoPorId(id) {
    const comando = `
         select id_produto                      as id,
                nm_produto                      as produto,
                vl_preco                        as preco,
                ds_categoria                    as categoria,
        from tb_produto 
       where id_produto = ?
        `

    const [registros] = await con.query(comando, [id]);
    return registros[0];
}


export async function buscarProdutoCategorias(idProduto) {
    const comando = `
         select ds_categoria   as       categoria
           from tb_produto 
          where id_produto = ?
        `

    const [registros] = await con.query(comando, [idProduto]);
    return registros.map(item => item.id);
}



export async function buscarProdutoImagens(idProduto) {
    const comando = `
          select ds_imagem   as imagem
            from tb_produto
           where id_produto = ?
        `

    const [registros] = await con.query(comando, [idProduto]);
    return registros.map(item => item.imagem);
}

export async function listarProdutosInicio() {
    const comando = `
           select tb_produto.id_produto		id,
               nm_produto					produto,
               vl_preco						preco,
               ds_categoria				    categoria,
               ds_imagem     				imagem
          from tb_produto
         group 
            by tb_produto.id_produto,
               nm_produto,
               ds_categoria
    `

    const [registros] = await con.query(comando);
    return registros;
}


export async function removerProduto(idProduto) {
    const comando = `
        delete from tb_produto 
              where id_produto = ?
    `

    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows;
}

//não ok
//img


export async function salvarProdutoImagem(idProduto, imagemPath) {
    const comando = `
        insert into tb_produto_img (id_produto, ds_img)
                values (?, ?);
    `
    const [resp] = await con.query(comando, [idProduto, imagemPath])
    console.log (resp);
}


export async function AlterarImagem(imagem, id){
    const comando =
        `UPDATE tb_produto_img
            SET ds_img = ?
          WHERE id_img = ?`;

    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}

export async function buscarimg(id) {
    const comando = `
       select nm_livro,
		vl_preco,
		ds_categoria
       from tb_produto
       where id_produto = ?;`

    const [registros] = await con.query(comando, [id]);
    return registros[0];
}