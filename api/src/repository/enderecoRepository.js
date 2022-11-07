import { con } from "./connection.js";


export async function listarEndereco(idUsuario) {
    const comando = 
    `select id_usuario_endereco	id,
            ds_endereco, 
            nr_endereco, 
            nr_cep, 
            ds_cpf, 
            ds_referencia, 
            ds_cidade, 
            ds_bairro, 
            ds_estado, 
            ds_pais, 
            ds_complemento
       from tb_usuarioendereco 
      where id_usuariologin = ? `

    const [registros] = await con.query(comando, [idUsuario]);
    return registros;
}


export async function EnderecoUsuario(idUsuario,endereco) {
    const comando = `
    INSERT INTO tb_usuario_endereco ( id_usuariologin, ds_endereco, nr_endereco, nr_cep, ds_cpf, ds_referencia, ds_cidade, ds_bairro, ds_estado, ds_pais, ds_complemento)
		            VALUES (?,?,?,?,?,?,?,?,?,?,?);`

    const [info] = await con.query(comando, [idUsuario, endereco.endereco, endereco.enderecoNumero, endereco.cepNumero, endereco.cpf, endereco.referencia, endereco.cidade, endereco.bairro, endereco.estado, endereco.pais, endereco.complemento]);
    return info.insertId;
}


export async function alterarEndereco(idUsuario, endereco) {
    const comando = `
    update tb_usuario_endereco set
    ds_endereco= ?, 
    nr_endereco= ?, 
    nr_cep= ?, 
    ds_cpf= ?,
    ds_referencia= ?,
    ds_cidade= ?, 
    ds_bairro= ?,
    ds_estado= ?, 
    ds_pais= ?,
    ds_complemento= ?
    where id_usuario_endereco = ?;
    `

    const [info] = await con.query(comando, [ endereco.endereco, endereco.enderecoNumero, endereco.cepNumero, endereco.cpf, endereco.referencia, endereco.cidade, endereco.bairro, endereco.estado, endereco.pais, endereco.complemento, idUsuario]);
    return info.insertId;
}