import './index.scss';
import { Link } from 'react-router-dom';

export default function Index (){
    return(
        <div className='b'>
            <nav ClassName='local'>
                <div className='cont-logo'>
                    <Link to='/'>
                        <img className='logo' src="../img/logo.png" alt='logo'/>
                    </Link>
                    <Link to='/'>
                        <p className='barra'> | </p>
                    </Link>
                    <Link to='/'className='titulo'>
                        <h1>Aurora</h1> <h1 className='sas'>Books</h1>
                    </Link>
                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar' />
                        <img className='puta' src='../img/pesquisa.png' alt='' />
                    </div>
                    <Link to='/carrinho'>
                        <img className='carrinho' src='../img/carrinho.png' alt='' />
                    </Link>
                    <Link className='botão-login' to='/login'>Login</Link>
                    <div>
                        <img className='puta2' src='../img/menu-aberto.png' alt='menu' />
                    </div>
                
                </div>
            </nav>
            <div className='linha'></div>
        </div>
    )
}