import { con } from './connection.js'


export async function Login(email, senha) {
    const comando = 
        `select id_usuariologin 		id,
                ds_email		     email,
                nm_usuario            nome
           from tb_usuariologin
          where ds_email 		    = ?
            and ds_senha		    = ? `
    
    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];
}

export async function listarUsuarioEndereco(){
    const comando = `
        select * from tb_usuario_endereco
    `

    const [regis] = await con.query(comando);
    return regis;
}

export async function listarUsuarioLogin(){    
    const comando = `
    select * from tb_usuariologin
`

const [regis] = await con.query(comando);
return regis;
}

export async function Consultar(id) {
    const comando = 
        `select ds_email		      email,
                nm_usuario            nome,
                ds_senha              senha,
                ds_cpf                cpf
           from tb_usuariologin
          where id_usuariologin 		    = ? `
    
    const [linhas] = await con.query(comando, [id])
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