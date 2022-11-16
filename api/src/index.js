import 'dotenv/config'

import usuarioController from './controller/usuarioController.js';
import produtoController from './controller/produtoController.js';
import adminController from './controller/adminController.js';
import enderecoController from './controller/enderecoController.js';
import produtoUsuarioController from './controller/produto-usuarioController.js';

import imagemController from './controller/imagemController.js';
import pedidoController from './controller/pedidoController.js';

import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json()); 

//imagems
server.use('/storage/produto', express.static('storage/produto'));
// endpoints :)
//fudido

server.use(imagemController);
server.use(pedidoController);

//em analise
server.use(produtoUsuarioController);

//ok
server.use(enderecoController);
server.use(usuarioController);
server.use(produtoController);
server.use(adminController);


server.listen(process.env.PORT, () => console.log(`API on ${process.env.PORT}`));