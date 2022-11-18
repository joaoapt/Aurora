
import { API_URL } from '../../api/config';
import './index.scss'

export default function CarrinhoCard({ item: { produto: { info, imagens }, qtd }, carregarCarrinho, remover }) {

    function exibirImagem() {
        if (imagens.length > 0) {
            return API_URL + '/' + imagens[0];
        }
        else {
            return './img/logo.png'
        }
    }

    function calcularSubtotal() {
        const subtotal = 1 * info.preco;
        return subtotal;
    }



    return (
        <div className='comp-carrinho-item'>
            <div className='produto-container'>
                <div className='produto-box'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th className='th'>Produto </th>
                                <th className='th'>Nome </th>
                                <th className='th'>Entrega </th>
                                <th className='th'>Preço </th>
                            </tr>
                        </thead>
                        <tr>
                            <td className='td'><img className='img-livro' src={exibirImagem()} alt='img-Livro'/></td>
                            <td className='td'>{info.produto}</td>
                            <td className='td'>É nessesário mais informações</td>
                            <td className='td'>R$ {calcularSubtotal()}</td>
                            
                        </tr>
                        
                    </table>
                    <div className='lixo'  onClick={remover}>
                        <img src="./img/icons8-remover-24.png" />
                    </div>
                </div>

                
            </div>

        </div>
    )
}