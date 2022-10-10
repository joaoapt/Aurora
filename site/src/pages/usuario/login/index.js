import { Link } from 'react-router-dom';

import './index.scss';

export default function Index() {
    return(
        <main className="page-login">
            <section className='conteudo-login'>
                <div>
                    
                    <h1 className='titulo-login'>Login</h1>
                    <div className='base'>
                        <div className='email-login'>
                            <label className='letras'>E-mail:</label>
                            <input type='email'></input>
                        </div>
                        <div className='senha-login'>
                            <label className='letras'>Senha:</label>
                            <input type='password'></input>
                        </div>
                            <div className='local-cadastrar'>
                                <Link className='botão-cadastrar-login' to='/cadastrar'>Cadastrar-se</Link>
                            </div>
                            <div className='botões'>
                                <button className='botão-voltar-login'>Voltar</button>
                                <Link className='botão-login' to='/menu'>Entrar</Link>
                            </div>   
                    </div>
                </div>
            </section>
        </main>
    )
}