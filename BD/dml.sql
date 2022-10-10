use aurorabksDB;

-- criar login
INSERT INTO tb_usuariologin (ds_email, ds_senha)
     VALUES ('j', '1234');

-- login
select id_admin 		 id
  from tb_admin
 where ds_email 		 = 'joao@email.com.br'
   and ds_senha			 = '1234';
   
   -- login
select id_usuario 		 id
  from tb_usuariologin
 where ds_email 		 = 'joao@email.com.br'
   and ds_senha			 = '1234';
   
-- usuario referente a conta
select nm_usuario     nome,
	   ds_cpf		        cpf
  from tb_usuario    
 where id_usuario    = 12 ;

-- endereço do usuario
select id_usuario_endereco      id,
       ds_endereco              endereco,
       nr_endereco              numero,
       nr_cep                   cep,
       ds_referencia            referencia,
       ds_cidade                cidade,
       ds_bairro                bairro,
       ds_estado                estado,
       ds_pais                  pais,
       ds_complemento           complemento
  from tb_usuarioendereco
 where  id_usuario         = 12;

-- inserir dados
insert into tb_produto (nm_categoria, nm_livro, nm_autor, nm_editora, nr_isbn13, nr_isbn10, vl_preco, nm_original, ds_sinopse, ds_versao, nr_pagina, nr_volume, nr_largura, nr_comprimento)
	values('filosofia','ameno','alan','mono',320,402,19,'amenonolo','martelo de ferro','2',23,42,24,43);
   
-- inserir imagem
insert into tb_produto (ds_imagem)
	values('https://tocalivros.s3.amazonaws.com/images/audiolivros/200/b/o/box-as-grandes-historias-de-sherlock-holmes-arthur-conan-doyle-1051105.jpg');

-- editar produto
update tb_produto
set nm_livro = 'oi',  nm_autor = 'oi', nm_editora = 'oi', nr_isbn13 = 120890887969856, nr_isbn10 = null, vl_preco = 150.89, nm_original = 'hi' 
where id_produto = 1; 

-- consultar produtos
select * from tb_produto;

-- consulta nome categoria
select * from tb_categoria;