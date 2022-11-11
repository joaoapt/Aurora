import { con } from './connection.js'


export async function loginAdmin(email, senha) {
    const comando = 
        `select id_admin 		id
           from tb_admin
          where ds_email 		= ?
            and ds_senha		= ? `
    
    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];
}