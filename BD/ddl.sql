drop database if exists aurorabksdb;
create database if not exists aurorabksDB;

use aurorabksDB;

create table tb_admin (
		id_admin 		int primary key auto_increment,
        ds_email		varchar(100),
        ds_senha		varchar(20)
);


create table tb_produto (
	id_produto 			int primary key auto_increment,
    nm_livro			varchar(150),
    ds_categoria        varchar(100),
    ds_classificacao    varchar(20),
    nm_autor			varchar(100),
    nm_editora			varchar(100),
    nm_idioma			varchar(60),
    nr_isbn13			int default null,
    nr_isbn10			int default null,
    vl_preco			decimal(15),
    nm_original			varchar(150),
    ds_sinopse			varchar(450),
    ds_versao			varchar(10),
    nr_pagina			int,
    nr_volume			int,
    nr_largura			int,
    nr_comprimento		int
);

create table tb_produto_img (
	id_produto_img	    int primary key auto_increment,
    id_produto				int,
    ds_img   			varchar(800),
    foreign key (id_produto) references tb_produto(id_produto)
);

create table tb_usuariologin(
    id_usuariologin int primary key auto_increment,
    nm_usuario varchar(200),
    ds_cpf varchar(14),
    ds_email varchar(100),
    ds_senha varchar(100)
);

create table tb_usuario_endereco(
    id_usuario_endereco int primary key auto_increment,
    id_usuariologin int,
    ds_endereco varchar(200),
    nr_endereco int,
    nr_cep varchar(9),

    ds_referencia varchar(350),
    ds_cidade varchar(100),
    ds_bairro varchar(100),
    ds_estado varchar(80),
    ds_pais varchar(90),
    ds_complemento varchar(30),
    foreign key (id_usuariologin) references tb_usuariologin(id_usuariologin)
);

create table tb_usuariofavorito(
	id_usuariofavorito int primary key auto_increment,
    id_usuariologin int,
    id_produto int,
    foreign key (id_usuariologin) references tb_usuariologin(id_usuariologin),
    foreign key (id_produto) references tb_produto(id_produto)
);


create table tb_pedido(
    id_pedido int primary key auto_increment,
    id_usuariologin int,
    id_usuario_endereco int,
    tp_forma_pagamento int,
    ds_status varchar(150),
    dt_pedido date,
    foreign key (id_usuario_endereco) references tb_usuario_endereco(id_usuario_endereco),
    foreign key (id_usuariologin) references tb_usuariologin(id_usuariologin)
);

create table tb_pedidoitem(
    id_pedido_item int primary key auto_increment,
    id_pedido int,
    id_produto int,
    qtd_itens int,
    vl_produto decimal(15, 2),
    foreign key (id_pedido) references tb_pedido(id_pedido),
    foreign key (id_produto) references tb_produto(id_produto)
);