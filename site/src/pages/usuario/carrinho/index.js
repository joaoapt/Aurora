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

import './index.scss'

import { useEffect, useState } from 'react'
import { API_URL } from '../../api/config'
import Storage, { set } from 'local-storage'
import { buscarProdutoPorId } from '../../api/produtoAPI';
import { listar } from '../../api/usuario'
import CarrinhoCard from '../../components/carrinhoCard';
import EderecoCard from '../../components/ederecoCard';
import ExibirEnderecos from '../../components/exibirEnderecos';
import Header from "../../components/header"
import { useNavigate } from 'react-router-dom';



export default function Carrinho() {
    const [itens, setItens] = useState([]);
    const [enderecos, setEnderecos] = useState([]);
    const [exibirEndereco, setExibirEndereco] = useState(false);


    const navigate = useNavigate();

    function irPedido() {
        navigate('/pedido')
    }

   

    async function carregarEnderecos() {
        const id = Storage('cliente-logado').id;
        const r = await listar(id);
        setEnderecos(r);
    }

    
    function exibirNovoEndereco() {
        setExibirEndereco(true);
    }

    function fecharNovoEndereco() {
        setExibirEndereco(false);
        carregarEnderecos();
    }

    function calcularValorTotal() {
        let total = 0;
        for (let item of itens) {
            total = total + item.produto.info.preco * item.qtd;
        }
        return total;
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
        carregarCarrinho();
        carregarEnderecos();
        
    }, [])


    return (
        <div className='pagina-carrinho'>
            <Header/>

            <h1> PRODUTO E FRETE </h1>

            <div className='pagina-pedido'>
            <ExibirEnderecos exibir={exibirEndereco} fechar={fecharNovoEndereco} />


            <div className='info'>
                <div>
                    <h2>SELECIONE O ENDEREÇO</h2>

                    <div className='enderecos'>

                      
                            <EderecoCard 
                             />
                           
                        
                    </div>

                    <button  onClick={exibirNovoEndereco}> Novo </button>

                </div>

                </div>
        </div>

            <div className='carrinho'>

                <div className='itens'>

                    {itens.map(item => 
                        <CarrinhoCard
                            item={item}
                            
                            carregarCarrinho={carregarCarrinho} />
                    )}

                </div>
                
                <div className='resumo'>
                    <h1> PREÇOS TOTAL   </h1>
                    <div className='total'>
                    <h3>  valor total: </h3>
                    <p> R$ {calcularValorTotal()} </p>
                    </div>

                    <button onClick={irPedido}> IR PARA PAGAMENTO </button>

                    <button onClick={irPedido}> CONTINUAR COMPRANDO </button>

                </div>

            </div>

        </div>
    )
}