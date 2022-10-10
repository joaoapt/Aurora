import './index.scss';
import Menu from '../../../components/admin/menu';
import Cabecalho from '../../../components/admin/cabecalho';

export default function Index(){
    return(
        <div className='page-pendentes'>
            <Menu selecionado='pendentes'/>
            
            <div className='cabecalho'>
                <Cabecalho/>
            </div>
        
            <div>
                <div>
                    <p>The Boys o Nome do Jogo</p>
                    <p>E-Book</p>
                </div>
                <div>
                    <img src="" alt=""/>
                    <p>Cronicas de Narnia</p>
                    <p>livro</p>
                </div>
                <div>
                    <img src="" alt=""/>
                    <p>Eu sou Malala</p>
                    <p>livro</p>
                </div>
                <div>
                    <img src="" alt=""/>
                    <p>As aventuras de Mike</p>
                    <p>livro</p>
                </div>
                <div>
                    <img src="" alt=""/>
                    <p>Nascida do Fogo</p>
                    <p>livro</p>
                </div>
                <div>
                    <img src="" alt=""/>
                    <p>Reliqua</p>
                    <p>livro</p>
                </div>
                <div>
                    <img src="" alt=""/>
                    <p>Foxcraft: A magia da raposa</p>
                    <p>livro</p>
                </div>
                <div>
                    <img src="" alt=""/>
                    <p>mitologia: editora hamilton</p>
                    <p>livro</p>
                </div>
            </div>
        </div>
    )
}