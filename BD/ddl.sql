create database aurorabsDB;

drop database aurorabsDB;

use aurorabsDB;

create table tb_usuario (
		id_usuario 		int primary key auto_increment,
        ds_email		varchar(200),
        ds_senha		varchar(20)
)