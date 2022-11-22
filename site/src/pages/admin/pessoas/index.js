import './index.scss';
import Menu from '../../../components/admin/menu';
import Cabecalho from '../../../components/admin/cabecalho';
import { Link } from 'react-router-dom';
import { listar } from '../../../api/endereco/listar-endereco';
import { consultar } from '../../../api/usuario/login-usuario';
import { useState,useEffect } from 'react';
import Storage from 'local-storage';


export default function Index(){

    const [endereco,setEndereco] = useState([]);
    const [usuario,setUsuario] = useState([]);

    async function carregarusuario(){
        const id = Storage('cliente-logado').id;
        const r = await  consultar(id);
        setUsuario(r);
    }

    async function carregarEndereco() {
     const id = Storage('cliente-logado').id;
        const r = await listar(id);
     setEndereco(r);
    }
 
    useEffect(() => {
     carregarEndereco();
     carregarusuario();
    })
    return(
        <div className='page-pendentes-pessoas'>
            <Menu selecionado='pendentes'/>
            <div>
                <div className='cabecalho'>
                        <Cabecalho/>
                </div>
                    <div className='base'>
                        <div className='caixa-busca'>
                                <input type="text" placeholder='Buscar' />
                                <img src='../img/pesquisa.png' alt='' />
                        </div>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Identificação</th>
                                        <th>Nome</th>
                                        <th>Pais</th>
                                        <th>Cidade</th>
                                        <th>Bairo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {endereco.map(item =>
                                       <tr>
                                           <td>{usuario.map(item.nome)}</td>
                                           <td>{item.numero}</td>
                                           <td>{item.bairo}</td>
                                           <td>{item.cidade}</td>
                                       </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <Link to='/pendentesmenu' className='botão' >Voltar</Link>
                        </div>
                    </div>  
            </div>
        </div>
    )
}