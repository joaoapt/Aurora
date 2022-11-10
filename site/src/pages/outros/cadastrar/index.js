import { Link } from 'react-router-dom';
import { novoLogin } from '../../../api/usuario/login-usuario'
import { useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');

    async function  salvarClick() {
        try {
            const resposta = await novoLogin(nome,email,senha);

            toast('Você foi cadastrado!');
        } catch (err) {
            toast.error(err.response.data.erro);
        }
    }

    return(
        <div className="page-login-cadastrar">
            <ToastContainer/>
            <div className='conteudo-login'>
                <div className='local'>
                <h1>Cadastrar</h1>
                    <div className='contener-input'>
                        <div className='input-2'>
                            <label className='letras'>Nome:</label>
                            <input className='input-2' type='text' value={nome} onChange={e => setNome(e.target.value)}/>
                        </div>
                        <div className='input-1'>
                            <label className='letras'>E-mail:</label>
                            <input type='email' value={email} onChange={e => setEmail(e.target.value)}  />
                        </div>
                        <div className='input-2'>
                            <label className='letras'>Senha:</label>
                            <input className='input-2' type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
                        </div>
                    </div>  
                    <div className='local-cadastrar'>
                      <Link className='botão-cadastrar-login' to='/login'>Logar</Link>
                    </div>
                    <ToastContainer/>
                    <div className='botoes'>
                        <div>
                            <Link to='/login' className='botão1'>Voltar</Link>
                        </div>
                        <div>
                            <button className='botão' onClick={salvarClick}>Enviar</button> 
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    )
}