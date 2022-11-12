import  Nota  from '../../../components/outros/nota';
import  Pesquisa from '../../../components/outros/pesquisa';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Storage from 'local-storage'

import { buscarProdutoPorId } from '../../../api/carrinho/produto.js';
import { API_URL } from '../../../api/config/configAPI';
import './index.scss';

export default function Index() {
    const [produto, setProduto] = useState({imagens: [], info: {} })
    const [imagemPrincipal, setImagemPrincipal] = useState(0);

    const { id } = useParams();

    function calcularValorTotal() {
        let total = 0;
        for (let item of itens) {
            total = total + item.produto.info.preco * item.qtd;
        }
        return total;
    }


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


    async function carregarCarrinho() {
        let carrinho = Storage('carrinho');
        if (carrinho) {

            let temp = [];
            
            for (let produto of carrinho) {
                let p = await buscarProdutoPorId(produto.id);
                
                temp.push({
                    produto: p,
                    qtd: produto.qtd
                })
            }

            setItens(temp);
        }

    }




    useEffect(() => {
        carregarPagina(); 
        calcularValorTotal();
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
                criar componente desse tr abaixo puxando os itens da api 
                deixarei exemplo na pasta componentes ass:Nick
                <tr>
                    <td className='td'><img className='img-livro' src='../img/the-boys-1.png' alt='img-Livro'/></td>
                    <td className='td'>The Boys o nome do jogo</td>
                    <td className='td'>É nessesa rio mais informações</td>
                    <td className='td'><input type='Number' ></input></td>
                    <td className='td'>R$:99,00</td>
                    
                </tr>
                {itens.map(item => 
                        <CarrinhoCard
                            item={item}
                            
                            carregarCarrinho={carregarCarrinho} />
                    )}
            </table>
                <div className='nota'> 
                    <Nota/>
                </div>
            </div>
        </div>
    )
}

