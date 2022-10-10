import storage from 'local-storage'
import { LoginAdmin } from '../../../api/login-admin'
import { useState, useRef,useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar'
import { useNavigate } from 'react-router-dom';

import './index.scss';

export default function Index() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
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
        ref.current.complete();
        setCarregando(false);
        if (err.response.status === 401){
            setErro(err.response.data.erro)
        }
    }
}
    
    return(
        <div className="page-login-admin">
            <LoadingBar color='#25C998' ref={ref}/>
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
                            <button className='botão1'>Voltar</button>
                        </div>
                        <div>
                            <button className='botão' onClick={entrarClick} disabled={carregando}>Logar</button> 
                        </div>
                    </div>
                    <div className='center'>
                        <div className='invalido'>
                            {erro}
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    )
}