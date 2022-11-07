import { con } from "./connection.js";


export async function listarEndereco(idUsuario) {
    const comando = `
     select id_usuario_endereco		id,
            ds_endereco			    endereco,
            ds_referencia           referencia,
            ds_cep					cep,
            nr_endereco             numero,
            ds_bairro				bairro,
            ds_cidade				cidade,
            ds_estado				estado,
            ds_pais                 pais,
            ds_complemento			complemento
       from tb_usuario_endereco 
      where id_usuario_conta = ?
    `

    const [registros] = await con.query(comando, [idUsuario]);
    return registros;
}


export async function EnderecoUsuario(idUsuario, endereco) {
    const comando = `
    insert into tb_usuario_endereco (id_usuariologin, ds_endereco, nr_endereco, nr_cep, ds_cpf, ds_referencia, ds_cidade, ds_bairro, ds_estado, ds_pais, ds_complemento)
                             values (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await con.query(comando, [idUsuario, endereco.referencia, endereco.cep, endereco.logradouro, endereco.bairro, endereco.cidade, endereco.estado,endereco.pais, endereco.numero, endereco.complemento]);
    return info.insertId;
}


export async function alterarEndereco(idUsuario, endereco) {
    const comando = `
    update tb_usuario_endereco set id_usuario,
     ds_referencia = ?,
     ds_cep = ?, 
     ds_endereco = ?, 
     ds_bairro = ?, 
     ds_cidade = ?, 
     ds_estado = ?, 
     ds_pais = ?, 
     nr_endereco = ?, 
     ds_complemento = ?
     where id_usuario_endereco = ?
    `

    const [info] = await con.query(comando, [idUsuario, endereco.referencia, endereco.cep, endereco.logradouro, endereco.bairro, endereco.cidade, endereco.estado,endereco.pais, endereco.numero, endereco.complemento]);
    return info.insertId;
}