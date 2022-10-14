import { con } from './connection.js'


export async function Login(email, senha) {
    const comando = 
        `select id_usuario 		id,
                ds_email		email,
                ds_nome         nome
           from tb_usuario
          where ds_email 		= ?
            and ds_senha		= ? `
    
    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];
}

export async function cadastrarLogin(login) {
    const comando = 
    `INSERT INTO tb_usuario (ds_nome, ds_email, ds_senha)
            VALUES (?, ?, ?) `;

    const resposta = await con.query(comando, [ login.nome, login.email, login.senha]);
    login.id = resposta.insertId;
    return resposta.insertId;
}
