import { con } from './connection.js'

export async function cadastrarLivro (cadastro) {
    const comando = `
    INSERT INTO tb_produto (id_categoria, nm_livro, nm_autor, nm_editora, nm_idioma, nr_isbn13, nr_isbn10, vl_preco, nm_original, ds_sinopse, ds_versao, nr_pagina, nr_volume, nr_largura, nr_comprimento)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
//16
    const resposta = await con.query(comando, [cadastro.categoria, cadastro.livro,cadastro.autor,cadastro.editora,cadastro.idioma,cadastro.isbn13,cadastro.isbn10,cadastro.preco,cadastro.original,cadastro.sinopse,cadastro.versao,cadastro.pagina,cadastro.volume,cadastro.largura,cadastro.comprimento]);
    return resposta.insertId;
}

export async function salvarProdutoCategoria(idProduto, idCategoria) {
    const comando = `
        insert into tb_produto_categoria (id_categoria, id_produto)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idCategoria, idProduto])
}


export async function ConsultarTodos() {
    const comando = `
    select * from tb_produto`

    const [linhas] = await con.query(comando)
    return linhas;
}

export async function Editar(id, produto) {
    const comando = `
    UPDATE tb_produto 
    set   id_categoria = ?, 
    nm_livro = ?, 
    nm_autor = ?, 
    nm_editora = ?, 
    nm_idioma = ?, 
    nr_isbn13 = ?, 
    nr_isbn10 = ?, 
    vl_preco = ?, 
    nm_original = ?, 
    ds_sinopse = ?, 
    ds_versao = ?, 
    nr_pagina = ?, 
    nr_volume = ?, 
    nr_largura = ?, 
    nr_comprimento = ?
    where id_produto = ?
    `

    const [resp] = await con.query(comando, [
        produto.categoria, produto.livro, produto.autor, produto.editora, produto.idioma, produto.isbn13, produto.isbn10, produto.preco, produto.original, produto.sinopse, produto.versao, produto.pagina, produto.volume, produto.largura, produto.comprimento, id
    ])
}

export async function removerProduto(idProduto) {
    const comando = `
        delete from tb_produto 
              where id_produto = ?
    `

    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows;
}

export async function listarCategorias() {
    const comando = `
        select id_categoria         as id,
               ds_categoria         as categoria
          from tb_categoria
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarProdutos() {
    const comando = `
        select tb_produto.id_produto        as id,
            nm_produto                      as produto,
            vl_preco                        as preco,
            bt_destaque                     as destaque,
            nm_departamento                 as departamento,
            count(nm_categoria)             as qtdCategorias
        from tb_produto 
        inner join tb_produto_categoria on tb_produto_categoria.id_produto = tb_produto.id_produto
        inner join tb_categoria on tb_categoria.id_categoria = tb_produto_categoria.id_categoria
        group 
            by tb_produto.id_produto,
                nm_produto,
                vl_preco,
                bt_destaque,
                nm_departamento
        `

    const [registros] = await con.query(comando);
    return registros;
}



export async function buscarProdutoPorId(id) {
    const comando = `
         select id_produto                      as id,
                nm_produto                      as produto,
                vl_preco                        as preco,
                bt_destaque                     as destaque,
                tb_produto.id_categoria         as categoria,
                nm_departamento                 as nomeDepartamento
        from tb_produto 
        inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
       where id_produto = ?
        `

    const [registros] = await con.query(comando, [id]);
    return registros[0];
}


export async function buscarProdutoCategorias(idProduto) {
    const comando = `
         select id_categoria   as id
           from tb_categoria 
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
               nm_categoria				    categoria,
               ds_imagem     				imagem
          from tb_produto
    inner join tb_categoria on tb_produto.id_categoria = tb_categoria.id_categoria
         group 
            by tb_produto.id_produto,
               nm_produto,
               ds_categoria
    `

    const [registros] = await con.query(comando);
    return registros;
}