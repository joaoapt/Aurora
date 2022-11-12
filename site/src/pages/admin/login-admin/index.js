import storage from 'local-storage'
import { LoginAdmin } from '../../../api/admin/login-admin'
import { useState, useRef,useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import './index.scss';

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando,setCarregando] = useState(false);
    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if (storage('usuario-logado')) {
            navigate('/menu');
        }
    }, [])

    async function entrarClick(){
        ref.current.continuousStart()
        setCarregando(true);
        
        try{
        const Marcelo = await LoginAdmin(email, senha);
            storage('usuario-logado', Marcelo);
        setTimeout(() => {
            navigate('/menu');
        }, 3000);
    
    } catch (err) {
     
            toast.error(err.response.data.erro)
    }
}
    
    return(
        <div className="page-login-admin">
            <LoadingBar color='#25C998' ref={ref}/>
            <ToastContainer/>
            <div className='conteudo-login'>
                <div className='local'>
                <h1>Login Admin</h1>
                    <div className='contener-input'>
                        <div className='input-1'>
                            <label className='letras'>E-mail:</label>
                            <input type='email' value={email} onChange={e => setEmail(e.target.value)}  />
                        </div>
                        <div className='input-2'>
                            <label className='letras'>Senha:</label>
                            <input className='input-2' type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
                        </div>
                    </div>  
                      
                    <div className='botoes'>
                        <div>
                            <Link to='/' className='botão1'>Voltar</Link>
                        </div>
                        <div>
                            <button className='botão' onClick={entrarClick} disabled={carregando}>Logar</button> 
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    )
}