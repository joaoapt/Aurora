import { con } from './connection.js'


export async function Login(email, senha) {
    const comando = 
        `select id_usuario_login 		id,
                ds_email		     email,
                nm_usuario            nome
           from tb_usuariologin
          where ds_email 		    = ?
            and ds_senha		    = ? `
    
    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];
}


export async function cadastrarLogin(login) {
    const comando = 
    `INSERT INTO tb_usuariologin (nm_usuario, ds_email, ds_senha)
            VALUES (?, ?, ?) `;

    const resposta = await con.query(comando, [login.nome, login.email, login.senha]);
    login.id = resposta.insertId;
    return resposta.insertId;
}