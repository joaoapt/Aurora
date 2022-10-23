import './index.scss';
import Menu from '../../../components/admin/menu';
import Cabecalho from '../../../components/admin/cabecalho';
import { Link } from 'react-router-dom';

export default function Index(){
    return(
        <main className="pag-pendentes-menu">
            <Menu selecionado='pendentes'/>
            <div>
                <div>
                    <Cabecalho/>
                </div>

                <div className='link'>
                    <Link to='/pendentes' className='quadrado-2'>
                        <img className='tabela' src="../img/tabela-de-dados.png" alt='logo'/>
                        <p>Ver Tabela</p>
                        <p>Livro</p>
                    </Link>
                    <Link to='/pendentespessoas' className='quadrado-1' >
                        <img className='rede' src="../img/rede.png" alt='logo'/>
                        <p>Ver Pedidos</p>
                        <p>Pendentes</p>
                    </Link>
                </div>
            </div>

        </main>
    )
}