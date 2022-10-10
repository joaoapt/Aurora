import storage from 'local-storage'
import './index.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useState} from 'react';

export default function Index(props) {

    const [menuSelecionado] = useState (props.selecionado)
    const navigate = useNavigate;
    
    function sairClick() {
        storage.remove('usuario-logado');
        navigate('/login-admin');
    }
   
    function verificarMenuSele(menu) {
        if (menu === menuSelecionado)
            return 'selecionado'
        
        else
        return '';
    }


    return (
        <nav className='menu'>
            <div>
            <div className='cont-logo'>
                    <div className='titulo'>
                        <h1>Aurora</h1>
                        <h1>Production</h1>
                    </div>
                    <div>
                        <img className='logo' src="../img/logo.png" alt='logo'/>
                    </div>
                </div>
            </div>
            <div className='conteudo-menu'>
                <div>
                    <Link to='/menu' className={verificarMenuSele ('home')}>
                        <img className='icon-casa' src="../img/casa.png" alt='home'/>
                        <p className='menu-p1'>Home</p>
                    </Link>
                </div>
                <div>
                    <Link to='/cadastrar/livro' className={verificarMenuSele ('cadastrar')}>
                        <img className='icon-cadastrar' src="../img/adicionar.png" alt='cadastrar'/>
                        <p className='menu-p2'>Cadastrar</p>
                    </Link>
                </div>
                <div>
                    <Link to='/pendentes' className={verificarMenuSele ('pendentes')}>
                        <img className='icon-lupa' src="../img/local.png" alt='consultar'/>
                        <p className='menu-p3'>Pendentes</p>
                    </Link>
                </div>
                <div>
                    <Link to='/editar-site' className={verificarMenuSele ('editar')}>
                        <img className='icon-editar' src="../img/editar-site.png" alt='consultar'/>
                        <p className='menu-p3'>Editar Site</p>
                    </Link>
                </div>
            </div>
            <div >
                <div>
                    <Link className='contener-sair' to='/login-admin' onClick={sairClick}>
                        <img className='icon-sair' src="../img/sair.png" alt='sair'/>
                          <p className='menu-p4'>sair</p>
                    </Link>
                </div>
            </div>
        </nav>
)}