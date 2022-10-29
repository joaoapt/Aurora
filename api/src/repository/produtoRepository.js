import { con } from './connection.js'

export async function cadastrarLivro (cadastro) {
    const comando = `
    INSERT INTO tb_produto ( nm_livro, nm_autor, nm_editora, nm_idioma, nr_isbn13, nr_isbn10, vl_preco, nm_original, ds_sinopse, ds_versao, nr_pagina, nr_volume, nr_largura, nr_comprimento)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
//15
    const resposta = await con.query(comando, [cadastro.livro, cadastro.autor, cadastro.editora, cadastro.idioma, cadastro.isbn13, cadastro.isbn10, cadastro.preco, cadastro.original, cadastro.sinopse, cadastro.versao, cadastro.pagina, cadastro.volume, cadastro.largura, cadastro.comprimento]);
    return resposta.insertId;
}

export async function ConsultarTodos() {
    const comando = `
    select * from tb_produto`

    const [linhas] = await con.query(comando)
    return linhas;
}

export async function Editar() {
    const comando = `
    UPDATE ?????
    `
}

//img
export async function salvarProdutoImagem(idProduto, imagemPath) {
    const comando = `
        insert into tb_produto_img (id_produto, ds_img)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, imagemPath])
}

//categoria
export async function listarCategorias() {
    const comando = `
        select id_categoria         as id,
               ds_categoria         as categoria
          from tb_categoria
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarCategoriaPorId(id) {
    const comando = `
        select id_categoria         as id,
               ds_categoria         as categoria
          from tb_categoria
         where id_categoria = ?;
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function salvarProdutoCategoria(idCategoria, idProduto) {
    const comando = `
    insert into tb_produto_categoria (id_categoria, id_produto)
                value(?,?);
    `

    const [resp] = await con.query(comando, [idCategoria, idProduto]);
}

//classificação
export async function listarClassificacoes() {
    const comando = `
        select id_classificacao         as id,
               ds_classificacao         as classificacao,
               ds_cor                   as cor
          from tb_classificacao
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarProdutoClassificacao(id) {
    const comando = `
         select id_classificacao   as id
                ds_classificacao   as classificacao
           from tb_classificacao 
          where id_produto = ?
        `

        const [linhas] = await con.query(comando, [id]);
        return linhas[0];
}

export async function salvarProdutoClassificacao(idClassificacao, idProduto) {
    const comando = `
        insert into tb_produto_classificacao (id_classificacao, id_produto)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idClassificacao, idProduto])
}



//EEEEEEERROOOOOOO
export async function buscarProdutos() {
    const comando = `
        select tb_produto.id_produto        as id,
            nm_produto                      as produto,
            vl_preco                        as preco,
           nm_categoria                     as categoria
        from tb_produto 
        group 
            by tb_produto.id_produto,
                nm_produto,
                vl_preco
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