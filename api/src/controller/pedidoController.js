
import { Router } from "express";
import { consultarStatus } from "../repository/pedidoRepository.js";
import { consultarPedidoUsuario } from "../repository/pedidoRepository.js";
import { inserirPagamentoBoleto, inserirPagamentoCartao, inserirPedido, inserirPedidoItem, alterarStatus} from "../repository/pedidoRepository.js";
import { buscarProdutoPorId } from "../repository/produtoRepository.js";
import { criarNovoPedidoBoleto, criarNovoPedidoCartao } from "../service/novoPedido.js";
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

//alterar status
server.put('/admin/pedido/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const pedido = req.body;
        await alterarStatus(id, pedido);
        
        resp.status(204).send();

    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

//consultar todos status e numero pedido tela admin
server.get('/consultar/status', async (req,resp) => {
    try {
        const id = req.params.id;
        const resposta = await consultarStatus(id);
        resp.send(resposta)
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

//consultar pedido especifico
server.get('/usuario/consultar/pedido', async (req,resp) => {
    try {
        const idPedido = req.params.idPedido;
        const idUsuario = req.params.idUsuario;
        const resposta = await consultarPedidoUsuario(idPedido, idUsuario);
        resp.send(resposta)
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

//Numero pedido e status tela usuario
server.get('/consultar/pedido', async (req,resp) => {
    try {
        const id = req.params.id;
        const resposta = await consultarPedido(id);
        resp.send(resposta)
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})


server.post('/api/pedido/boleto/:idUsuario/', async (req, resp) => {
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