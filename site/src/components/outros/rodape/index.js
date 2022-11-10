import './index.scss';
import { Link } from 'react-router-dom';

export default function Index (){
    return(
        <footer className='rodape'>
                <div className='conterne-rodapé'>
                    <div className='logo'> <img className='logo' src="../img/logo.png" alt='logo'/> </div>
                    <div className='texto-rodapé'>
                        <h1>Início</h1>
                        <Link to='/' className='aa'>Home</Link>
                        <br/>
                        <Link to='/cadastrar' className='aa'>Cadastre-se</Link>
                        <br/>
                        <Link to='/tela1' className='aa'>Perfil</Link>
                        <br/>
                        <Link to='/carrinho' className='aa'>Carrinho</Link>
                        <br/>
                        <Link to='/login-admin' className='aa'>Login admin</Link>
                    </div>
                    <div className='texto-rodapé'>
                        <h1>Créditos</h1>
                        <h2>DEVs:</h2>
                        <p>João Pedro F.M</p>
                        <h2>SENIOR</h2>
                        <p>Nicolas Dias</p>
                        <p>Victor raphael</p>
                    </div>
                    <div className='texto-rodapé'>
                        <h1>Suporte</h1>
                        <p>Contato</p>
                        <h2>FAQ</h2>
                    </div>
                    <div className='ab'>
                        <Link to='/login-admin' className='botão'>Login</Link> 
                    </div>
                </div>
        </footer>
    )
}