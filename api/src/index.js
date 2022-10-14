import 'dotenv/config'

import usuarioController from './controller/usuarioController.js';
import produtoController from './controller/produtoController.js';
import adminController from './controller/adminController.js'

import express from 'express';
import cors from 'cors';


const server = express();
server.use(cors());
server.use(express.json());

// endpoints :)
server.use(usuarioController);
server.use(produtoController);
server.use(adminController);


server.listen(process.env.PORT, () => console.log(`API on ${process.env.PORT}`));