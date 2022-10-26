import './index.scss';
import { Link } from 'react-router-dom';

export default function Index (){
    return(
        <footer className='rodape'>
                <div className='conterne-rodapé'>
                    <div className='logo'> <img className="logo" src="./img/logo.png" alt="logo"/> </div>
                    <div className='texto-rodapé'>
                        <h1>Início</h1>
                        <p>Home</p>
                        <p>Cadastre-se</p>
                        <p>Perfil</p>
                        <p>Carrinho</p>
                        <p>Login adim</p>
                        <p>erro</p>
                        <p></p>
                    </div>
                    <div className='texto-rodapé'>
                        <h1>Créditos</h1>
                        <h2>DEVs:</h2>
                        <p>João Pedro</p>
                        <p>Nicolas Dias</p>
                        <h2>SENIOR</h2>
                        <p>Maria Luísa</p>
                        <p>Victor raphael</p>
                    </div>
                    <div className='texto-rodapé'>
                        <h1>Suporte</h1>
                        <p>Contato</p>
                        <h2>FAQ</h2>
                    </div>
                    <div className='ab'>
                        <Link to='/login' className='botão'>Login</Link> 
                    </div>
                </div>
        </footer>
    )
}