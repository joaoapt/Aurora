import { con } from './connection.js'

export async function cadastrarLivro (cadastro) {
    const comando = `
    INSERT INTO tb_produto (id_categoria, nm_livro, nm_autor, nm_editora, nm_idioma, nr_isbn13, nr_isbn10, vl_preco, nm_original, ds_sinopse, ds_versao, nr_pagina, nr_volume, nr_largura, nr_comprimento)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
//16
    const resposta = await con.query(comando, [cadastro.categoria, cadastro.livro,cadastro.autor,cadastro.editora,cadastro.idioma,cadastro.isbn13,cadastro.isbn10,cadastro.preco,cadastro.original,cadastro.sinopse,cadastro.versao,cadastro.pagina,cadastro.volume,cadastro.largura,cadastro.comprimento]);
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

export async function listarCategorias() {
    const comando = `
        select id_categoria         as id,
               ds_categoria         as categoria
          from tb_categoria
    `

    const [linhas] = await con.query(comando);
    return linhas;
}