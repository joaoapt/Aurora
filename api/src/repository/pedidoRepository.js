import { con } from "./connection.js";



export async function inserirPedido(novoPedido) {
    const comando = `
        INSERT INTO tb_pedido (
            id_usuario_conta,
            id_usuario_endereco,
            dt_pedido,
            ds_status,
            ds_forma_pagamento,
            dt_pedido
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `

    const [info] = await con.query(comando, [
        novoPedido.idUsuario,
        novoPedido.idEndereco,
        novoPedido.data,
        novoPedido.status,
        novoPedido.tipoPagamento
    ]);
    return info.insertId;
}




export async function inserirPagamentoCartao(idPedido, novoPagamento) {
    const comando = `
            INSERT INTO tb_pagamento_cartao (
                id_pedido,
                nm_pessoa,
                nr_cartao,
                ds_cpf,
                dt_validade,
                cod_seguranca,
                ds_forma_pagamento
            )
            VALUES (?, ?, ?, ?, ?, ?, ?);
    `

    const [info] = await con.query(comando, [
        idPedido,
        novoPagamento.nome,
        novoPagamento.numero,
        novoPagamento.cpf,
        novoPagamento.vencimento,
        novoPagamento.codSeguranca,
        novoPagamento.formaPagamento
    ]);
    return info.affectedRows;
}

export async function inserirPagamentoBoleto(idPedido, novoPagamento, novoBoleto) {
    const comando = `
            INSERT INTO tb_pagamento_boleto (
                id_pedido,
                cod_boleto,
                ds_forma_pagamento
            )
            VALUES (?, ?, ?, ?, ?, ?, ?);
    `

    const [info] = await con.query(comando, [
        idPedido,
        novoPagamento.nome,
        novoBoleto,
        novoPagamento.formaPagamento
    ]);
    return info.affectedRows;
}






export async function inserirPedidoItem(idPedido, idProduto, qtd, preco) {
    const comando = `
        INSERT INTO tb_pedido_item (
            id_pedido,
            id_produto,
            qtd_itens,
            vl_produto
        )
        VALUES (?, ?, ?, ?)
    `

    const [info] = await con.query(comando, [idPedido, idProduto, qtd, preco]);
    return info.affectedRows;
}