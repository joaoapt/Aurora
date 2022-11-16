import './index.scss';
import Menu from '../../../components/admin/menu';
import Cabecalho from '../../../components/admin/cabecalho';
import { Link } from 'react-router-dom';

export default function Index(){
    return(
        <div className='page-pendentes-pessoas'>
            <Menu selecionado='pendentes'/>
            <div>
                <div className='cabecalho'>
                        <Cabecalho/>
                </div>
                    <div className='base'>
                        <div className='caixa-busca'>
                                <input type="text" placeholder='Buscar' />
                                <img src='../img/pesquisa.png' alt='' />
                        </div>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Identificação</th>
                                        <th>Nome</th>
                                        <th>Pais</th>
                                        <th>Cidade</th>
                                        <th>Bairo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1234</td>
                                        <td>João</td>
                                        <td>40028922</td>
                                        <td>04/01/05</td>
                                        <td>R$ 400,00</td>
                                    </tr>
                                    <tr>
                                    <td>1234</td>
                                        <td>João</td>
                                        <td>40028922</td>
                                        <td>04/01/05</td>
                                        <td>R$ 400,00</td>
                                    </tr>
                                    <tr>
                                        <td>1234</td>
                                        <td>João</td>
                                        <td>40028922</td>
                                        <td>04/01/05</td>
                                        <td>R$ 400,00</td>
                                    </tr>
                                    <tr>
                                        <td>1234</td>
                                        <td>João</td>
                                        <td>40028922</td>
                                        <td>04/01/05</td>
                                        <td>R$ 400,00</td>
                                    </tr>
                                    <tr>
                                        <td>1234</td>
                                        <td>João</td>
                                        <td>40028922</td>
                                        <td>04/01/05</td>
                                        <td>R$ 400,00</td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <Link to='/pendentesmenu' className='botão' >Voltar</Link>
                        </div>
                    </div>  
            </div>
        </div>
    )
}