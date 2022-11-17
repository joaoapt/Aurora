import  Pesquisa from '../../../components/outros/pesquisa';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Storage from 'local-storage'
import { buscarProdutoPorId } from '../../../api/carrinho/produto.js';
import './index.scss';

export default function Index() {
    const [itens, setItens] = useState({imagens: [], info: {} })


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
            
                {itens.map(item => 
                        <CarrinhoCard
                            item={item}
                            
                            carregarCarrinho={carregarCarrinho} />
                    )}

                <div className='nota'> 
                    <div className='nota-pagamento'>
                        <div className='conteudo'>
                            <div className='titulo'>
                                <h8>Resumo</h8>
                            </div>
                            <div className='resultado'>
                                <p>Total </p>
                                <p> R$ {calcularValorTotal}</p>
                            </div>
                            <div className='centralizar'>
                                <button className='botão' onClick={irPedido}>Finalizar Compra</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


