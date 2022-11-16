import { Router } from "express";
import { inserirPagamentoCartao, inserirPedido, inserirPedidoItem } from "../repository/pedidoRepository.js";
import { buscarProdutoPorId } from "../repository/produtoRepository.js";
import { criarNovoPedidoCartao } from "../service/novopedido.js";

const server = Router();


server.post('/api/pedido/cartao/:idUsuarioLogin/', async (req, resp) => {
    try {
        const { idUsuarioLogin } = req.params;
        const info = req.body;

        const novoPedido = criarNovoPedidoCartao(idUsuarioLogin, info);

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


export default server;