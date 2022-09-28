import  Nota  from '../../../components/outros/nota';
import  Pesquisa from '../../../components/outros/pesquisa';
import './index.scss';

export default function Index() {
    return(
        <div className='page-carrinho'>
            <div className='pesquisa'>
                <Pesquisa/>
            </div>
            <div className='interação'>
            <table>
                <thead>
                    <tr>
                        <th>Produto </th>
                        <th>Nome </th>
                        <th>Entrega </th>
                        <th>Quantidade </th>
                        <th>Preço </th>
                    </tr>
                </thead>
                <tr>
                    <td><img className='img-livro' src='../img/the-boys-1.png' alt='img-Livro'/></td>
                    <td>The Boys o nome do jogo</td>
                    <td>É nessesa rio mais informações</td>
                    <td><input type='Number' ></input></td>
                    <td>R$:99,00</td>
                </tr>
            </table>
                <div className='nota'> 
                    <Nota/>
                </div>
            </div>
        </div>
    )
}