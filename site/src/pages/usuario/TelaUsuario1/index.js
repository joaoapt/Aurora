import './index.css';
import Cabecalho from '../../../components/admin/cabecalho';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { listar } from '../../../api/endereco/listar-endereco';
import { consultar } from '../../../api/usuario/login-usuario';


export default function Index() {
    const [usuario, setUsuario] = useState ([]);
    const [endereco, setEndereco] = useState ([])

    async function  info() {
            const u = storage ('usuario-logado').id;
            const r = await consultar(u);
            const e = await listar(u) 
            setEndereco(e);
            setUsuario(r);
            toast('Seja Bem Vindo, Usuário!');

    }
    useEffect(() => {
        info();
    }, [])
            

    return(
        <main className='page-usu1'>
            <ToastContainer/>
                <Cabecalho/>
                <div>
                    <div className='k-usu1'>

                    {usuario.map(item =>
                        <div>
                            <p className='a-usu1'>Nome:</p>
                            <p className='b-usu1'>{item.nome}</p>
                            <p className='c-usu1'>Senha: {item.senha}</p>
                            <p className='d-usu1'>Email:</p> 
                            <p className='e-usu1'>{item.email}</p>
                            <p className='f-usu1'>CPF:</p>
                            <p className='g-usu1'>{item.cpf}</p>
                        </div> 
                    )}
                    {endereco.map(item => 
                        <div>
                            <p className='h-usu1'>Endereço:</p> 
                            <p className='i-usu1'>{item.rua}, {item.numero}, {item.complemento},{item.bairro}, {item.cidade}, {item.estado}, {item.pais}, {item.cep}</p>
                            <p className='h-usu1'>Referência:</p> 
                            <p className='h-usu1'>{item.referencia}</p> 
                            <p className='j-usu1'>Alterar Endereço</p>
                        </div>    
                    )}
                    </div>
                </div>
        
        </main>
    )
}