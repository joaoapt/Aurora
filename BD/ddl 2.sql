use aurorabksDB;

create table tb_pagamentocartao(
    id_pagamentocartao int primary key auto_increment,
    id_pedido int,
    nm_pessoa varchar(200),
    nr_cartao int,
    cod_seguranca int(3),
    dt_validade varchar(5),
    ds_cpf varchar(14),
    foreign key (id_pedido) references tb_pedido(id_pedido)
);

create table tb_pagamentoboleto(
    id_pagamentoboleto int primary key auto_increment,
    id_pedido int,
    cod_boleto int,
    foreign key (id_pedido) references tb_pedido(id_pedido)
);

insert into tb_pagamentocartao (id_pedido) values (1);
select * from tb_pagamentocartao
