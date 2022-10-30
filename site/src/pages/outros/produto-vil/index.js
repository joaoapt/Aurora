import './index.scss';
import Buscar from '../../../components/outros/busca';
import Rodape from '../../../components/outros/rodape';
import Produto from '../../../components/carrocel/produto';


export default function Index () {
    return(
        <div className='pag-produto-vil'>
            <div>
                <nav><Buscar/></nav>
                <div>
                    <div>
                        
                    </div>
                    <div>
                        <h4>Recomendado</h4>
                        <div className='aaa'>
                            <Produto/>
                        </div>
                    </div>
                </div>
                <footer><Rodape/></footer>
            </div>
        </div>
    )
}