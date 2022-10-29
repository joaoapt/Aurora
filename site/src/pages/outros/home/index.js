import './index.scss';
import Buscar from '../../../components/outros/busca';
import Rodape from '../../../components/outros/rodape';
import Card from '../../../components/carrocel/card';
import Produto from '../../../components/carrocel/produto';
// import { Romance } from '../../../components/animação/romanceAnimation';
// import { FC } from '../../../components/animação/FCAnimatons';

export default function Index () {
    return(
        <div className='pag-home'>
            <div>
                <nav><Buscar/></nav>
                <div className='conteudo'>
                    <div><Card/></div>
                    <div className='aaa'>
                        <Produto/>
                    </div>
                    <div className='aaa'>
                        <Produto/>
                    </div>
                    <div className='img'>
                        <img className="propaganda" src="./img/propaganda.png" alt="propaganda"/>
                    </div>
                    <div className='aaa'>
                        <Produto/>
                    </div>
                    <div className='box-quadrado'>
                        <div className='quadrado'>
                            <h3>Livro de Romance</h3>
                        </div>
                        <div className='quadrado'>
                            <h3>Livro de Sci-Fi</h3>
                        </div>
                    </div>
                </div>
                <footer><Rodape/></footer>
            </div>
        </div>
    )
}