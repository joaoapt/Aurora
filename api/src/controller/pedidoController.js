
import { Router } from "express";
import { inserirPagamentoBoleto, inserirPagamentoCartao, inserirPedido, inserirPedidoItem } from "../repository/pedidoRepository.js";
import { buscarProdutoPorId } from "../repository/produtoRepository.js";
import { criarNovoPedidoBoleto, criarNovoPedidoCartao } from "../service/index.js";
import { criarBoleto } from "../service/novopedido.js";
const server = Router();


server.post('/api/pedido/cartao/:idUsuario/', async (req, resp) => {
    try {
        const { idUsuario } = req.params;
        const info = req.body;


        const novoPedido = criarNovoPedidoCartao(idUsuario, info);

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


server.post('/api/pedido/cartao/:idUsuario/', async (req, resp) => {
   try {
       const { idUsuario } = req.params;
       const info = req.body;


       const novoPedido = criarNovoPedidoBoleto(idUsuario, info, criarBoleto());

       const idPedidoCriado = await inserirPedido(novoPedido);
       await inserirPagamentoBoleto(idPedidoCriado, info.boleto);

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


export default server;