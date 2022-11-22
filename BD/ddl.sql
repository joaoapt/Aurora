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
    vl_preco			varchar(15),
    nm_original			varchar(150),
    ds_sinopse			varchar(450),
    ds_versao			varchar(10),
    nr_pagina			int,
    nr_volume			int,
    nr_largura			int,
    nr_comprimento		int,
    ds_img				varchar(1000)
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
    ds_email varchar(100),
    ds_senha varchar(100)
);

create table tb_usuario_endereco(
    id_usuario_endereco int primary key auto_increment,
    id_usuariologin int,
    ds_endereco varchar(200),
    ds_cep varchar(40),
    ds_referencia varchar(350),
    ds_cidade varchar(100),
    ds_bairro varchar(100),
    ds_estado varchar(80),
    ds_pais varchar(90),
    ds_complemento varchar(30),
    foreign key (id_usuariologin) references tb_usuariologin(id_usuariologin)
);


create table tb_pedido(
    id_pedido int primary key auto_increment,
    id_produto int,
    id_usuario_endereco int,
    dt_pedido varchar(20),
	vl_produto varchar(15.2),
    foreign key (id_usuario_endereco) references tb_usuario_endereco(id_usuario_endereco),
	foreign key (id_produto) references tb_produto(id_produto)
);

select * from tb_usuario_endereco