import { con } from "./connection.js";


export async function inserirPedido(novoPedido) {
    const comando = `
        INSERT INTO tb_pedido (
            id_produto,
            id_usuario_endereco,
            vl_produto
        )
        VALUES (?, ?, ?)
    `

    const [info] = await con.query(comando, [
        novoPedido.idProduto,
        novoPedido.idUsuarioEndereco,
        novoPedido.preco
    ]);
    return info.insertId;
}


// export async function inserirPagamentoCartao(idPedido, novoPagamento) {
//     const comando = `
//             INSERT INTO tb_pagamento_cartao (
//                 id_pedido,
//                 nm_cartao,
//                 nr_cartao,
//                 ds_cpf,
//                 dt_validade,
//                 cod_seguranca,
//                 ds_forma_pagamento
//             )
//             VALUES (?, ?, ?, ?, ?, ?, ?);
//     `

//     const [info] = await con.query(comando, [
//         idPedido,
//         novoPagamento.carNome,
//         novoPagamento.carNumero,
//         novoPagamento.cpf,
//         novoPagamento.vencimento,
//         novoPagamento.codSeguranca,
//         novoPagamento.formaPagamento
//     ]);
//     return info.affectedRows;
// }


// export async function inserirPagamentoBoleto(idPedido, novoPagamento, novoBoleto) {
//     const comando = `
//             INSERT INTO tb_pagamentoboleto (
//                 id_pedido,
//                 cod_boleto,
//                 ds_forma_pagamento
//             )
//             VALUES (?, ?, ?);
//     `

//     const [info] = await con.query(comando, [
//         idPedido,
//         novoPagamento.nome,
//         novoBoleto,
//         novoPagamento.formaPagamento
//     ]);
//     return info.affectedRows;
// }