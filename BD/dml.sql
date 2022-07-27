use aurorabsDB;

-- criar login
INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
     VALUES ('João', 'joao@email.com.br', '1234');

-- login
select id_usuario 		id,
       nm_usuario		nome,
       ds_email			email
  from tb_usuario
 where ds_email 		= 'joao@email.com.br'
   and ds_senha			= '1234';
   
select * from tb_usuario;