import  Nota  from '../../../components/outros/nota';
import  Pesquisa from '../../../components/outros/pesquisa';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Storage from 'local-storage'
import { toast } from 'react-toastify'
import { buscarProdutoPorId } from '../../../api/carrinho/produto.js';
import { API_URL } from '../../../api/config/configAPI';
import './index.scss';

export default function Index() {
    const [produto, setProduto] = useState({ categorias: [], imagens: [], info: {} })
    const [imagemPrincipal, setImagemPrincipal] = useState(0);

    const { id } = useParams();


    async function carregarPagina() {
        const r = await buscarProdutoPorId(id);
        setProduto(r);
    }

    function exibirImagemPrincipal() {
        if (produto.imagens.length > 0) {
            return API_URL + '/' + produto.imagens[imagemPrincipal];
        }
        else {
            return '/produto-padrao.png';
        }
    }

    function exibirImagemProduto(imagem) {
        return API_URL + '/' + imagem;
    }


    function adicionarAoCarrinho() {
        let carrinho = [];
        if (Storage('carrinho')) {
            carrinho = Storage('carrinho');
        }


        if (!carrinho.find(item => item.id === id)) {
            carrinho.push({
                id: id,
                qtd: 1
            })

            Storage('carrinho', carrinho);
        }

        toast('ok foi adicionado ao carrinho!');
    }


    useEffect(() => {
        carregarPagina(); 
    }, [])

    return(
        <div className='pag-carrinho'>
            <div className='pesquisa'>
                <Pesquisa/>
            </div>
            <div className='interação'>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='th'>Produto </th>
                        <th className='th'>Nome </th>
                        <th className='th'>Entrega </th>
                        <th className='th'>Quantidade </th>
                        <th className='th'>Preço </th>
                    </tr>
                </thead>
                <tr>
                    <td className='td'><img className='img-livro' src='../img/the-boys-1.png' alt='img-Livro'/></td>
                    <td className='td'>The Boys o nome do jogo</td>
                    <td className='td'>É nessesa rio mais informações</td>
                    <td className='td'><input type='Number' ></input></td>
                    <td className='td'>R$:99,00</td>
                </tr>
            </table>
                <div className='nota'> 
                    <Nota/>
                </div>
            </div>
        </div>
    )
}