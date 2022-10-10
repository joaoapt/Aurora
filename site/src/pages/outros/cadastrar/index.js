import { Link } from 'react-router-dom';

import './index.scss';

export default function Index() {
    return(
        <main className='page-cadastrar'>
            <section className='conteudo-cadastrar'>
                <div>
                    <h1 className='titulo-cadastrar'>Cadastrar</h1>
                    <div className='usuario-base'>   
                        <div>
                            <label className='letras'>E-mail:</label>
                            <input type='email'></input>
                        </div>
                        <div cla>
                            <label className='letras'>Nome:</label>
                            <input type='text'></input>

                        </div>
                        <div >
                            <label className='letras'>Senha:</label>
                            <input type='password'></input>
                        </div>
                    </div>
                    <div className='local-cadastrar'>
                        <Link className='botão-voltar-cadastrar' to='/login'>Voltar</Link>
                        <button className='botão-cadastrar'>Entrar</button>
                    </div>
                </div>
            </section>
        </main>
    )
}