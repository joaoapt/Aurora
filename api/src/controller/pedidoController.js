
import { Router } from "express";
import { inserirPagamentoBoleto, inserirPagamentoCartao, inserirPedido, inserirPedidoItem } from "../repository/pedidoRepository.js";
import { buscarProdutoPorId } from "../repository/produtoRepository.js";
import { criarboleto, criarNovoPedido } from "../service/index.js";
const server = Router();



server.post('/api/pedido/cartao/:idUsuario/', async (req, resp) => {
    try {
        const { idUsuario } = req.params;
        const info = req.body;


        const novoPedido = criarNovoPedido(idUsuario, info);

        const idPedidoCriado = await inserirPedido(novoPedido);
        await inserirPagamentoCartao(idPedidoCriado, info.cartao);

        for (let item of info.produtos) {
            const prod = await buscarProdutoPorId(item.id);
            await inserirPedidoItem(idPedidoCriado, prod.id, item.qtd, prod.preco);
        }

        resp.status(204).send();

    }
    catch (err) {
        console.log(err);
        resp.status(400).send({
            erro: err.message
        })
    }
})

//server.post('/api/pedido/:idUsuario/', async (req, resp) => {
//    try {
//        const { idUsuario } = req.params;
//        const info = req.body;
//
//
//      const novoPedido = criarNovoPedido(idUsuario, info);
//
//        const idPedidoCriado = await inserirPedido(novoPedido);
//        await inserirPagamentoCartao(idPedidoCriado, info.cartao);
//
//        for (let item of info.produtos) {
//            const prod = await buscarProdutoPorId(item.id);
//            await inserirPedidoItem(idPedidoCriado, prod.id, item.qtd, prod.preco);
//        }
//
//        resp.status(204).send();
//
//    }
//    catch (err) {
//        console.log(err);
//        resp.status(400).send({
//            erro: err.message
//        })
//    }
//})


export default server;