import './index.scss';
import Buscar from '../../../components/outros/busca';
import Rodape from '../../../components/outros/rodape';

export default function Index () {
    return(
        <div className='pag-home'>
            <div>
                <nav><Buscar/></nav>
                <div className='conteudo'>
                    <div className='img'>
                        <img className="propaganda" src="./img/propaganda.png" alt="propaganda"/>
                    </div>
                    <div className='box-quadrado'>
                        <div className='quadrado'>
                            <h3>Livro de Romance</h3>
                            <img className="gif" src="" alt="romance"/>
                        </div>
                        <div className='quadrado'>
                            <h3>Livro de Sci-Fi</h3>
                            <img className="gif" src="" alt="ci"/>
                        </div>
                    </div>
                </div>
                <footer><Rodape/></footer>
            </div>
        </div>
    )
}